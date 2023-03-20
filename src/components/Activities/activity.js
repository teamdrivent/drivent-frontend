import styled from 'styled-components';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import useToken from '../../hooks/useToken';
import { toast } from 'react-toastify';

export default function ActivityComponent(props) {
  const { act, heightOfBox, day } = props;
  const randomNumber = Math.floor(Math.random() * 27);
  const [heihgthState, setHeightState] = useState(heightOfBox);
  const height = ((Number(act.finishesAt) - Number(act.startsAt)) / 100) * 80;
  const stringedHeight = heightOfBox + 'px';
  const token = useToken();

  function setHeightOfBox() {
    document.documentElement.style.setProperty('--height-box', heightOfBox);
    return;
  }
  useEffect(() => {
    setHeightOfBox();
  }, [day]);
  return (
    <>
      <Activity reserved={props.reserved}>
        <ActivityInfo>
          <h2>{act.name}</h2>
          <p>
            {act.startsAt.slice(0, 2)}:{act.startsAt.slice(-2)} - {act.finishesAt.slice(0, 2)}:
            {act.finishesAt.slice(-2)}
          </p>
        </ActivityInfo>
        <ActivityDisp color={randomNumber} disabled={randomNumber === 0 ?true : false}>
          <ButtonActivity reserved={props.reserved} onClick={() => {makeReservation(act, token, props.reserveds, props.setReserveds, props.reserved);}} disabled={randomNumber === 0 ?true : false}>
            {randomNumber !== 0 ? ( props.reserved !== -1 ? <AiOutlineCheckCircle fontSize={20}/> : <BsBoxArrowInRight fontSize={20} /> ) : <AiOutlineCloseCircle fontSize={20} />}
          </ButtonActivity>
          <p>{randomNumber === 0 ? 'Esgotado' : (props.reserved === true ? 'Inscrito' : randomNumber )}</p>
        </ActivityDisp>
      </Activity>
    </>
  );
}

async function makeReservation(act, token, reserveds, setReserveds, reserved) {
  if(reserved !== -1) {
    axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}/activities/`+ reserved, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let arr = [...reserveds];
        arr.splice(find(reserveds, reserved), 1);
        setReserveds(arr);
      })
      .catch((err) => {
        console.log(err.error);
      });
  }
  else{
    if(await verificaHorario(act, reserveds) === true) {
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/activities`, { id: act.id }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          let arr = [...reserveds, res.data]; 
          setReserveds(arr);
        })
        .catch((err) => {
          console.log(err.error);
        });
    }
    else{
      toast('Essa atividade há conflito de horário com outra atividade!');
    }
  }
}

function find(reserveds, id) {
  let pos = -1;

  reserveds.forEach((reserv, i) => {
    if(reserv.id === id) {
      pos = i;
    }
  });

  return pos;
}

function verificaHorario(act, reserveds) {
  let condicional = true;
  reserveds.forEach((reserv) => {
    if(reserv.Activity.date === act.date) {
      if(act.startsAt >= reserv.Activity.startsAt && act.startsAt < reserv.Activity.finishesAt) {
        condicional=false;
      }
      if(act.finishesAt > reserv.Activity.startsAt && act.finishesAt <= reserv.Activity.finishesAt) {
        condicional=false;
      }
  
      if(reserv.Activity.startsAt >= act.startsAt &&  reserv.Activity.startsAt < act.finishesAt) {
        condicional=false;
      }
      if(reserv.Activity.finishesAt > act.startsAt && reserv.Activity.finishesAt <= act.finishesAt) {
        condicional=false;
      }
    }
  });

  return condicional;
}

const ButtonActivity = styled.button`
  background-color: ${props => props.reserved === -1 ? '#f1f1f1' : '#D0FFDB'};
`;

const Activity = styled.div`
  --height-box: 80px;
  width: 268px;
  height: var(--height-box);
  background-color: ${props => props.reserved === -1 ? '#f1f1f1' : '#D0FFDB'};
  display: flex;
  align-items: center;
  margin-top: 10px;
  border-radius: 10px;
`;

const ActivityInfo = styled.div`
  width: 200px;
  height: 60px;
  border-right: 1px solid #cfcfcf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
  }
`;

const ActivityDisp = styled.div`
  width: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  color: ${(props) => (props.color == 0 ? '#CC6666' : '#078632')};
  p {
    font-size: 9px;
  }
  button {
    border: none;
    color: ${(props) => (props.color == 0 ? '#CC6666' : '#078632')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' :'pointer')};
  }
`;
