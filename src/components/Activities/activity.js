import styled from 'styled-components';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ActivityComponent(props) {
  const { act, heightOfBox, day } = props;
  const [heihgthState, setHeightState] = useState(heightOfBox);
  const height = ((Number(act.finishesAt) - Number(act.startsAt)) / 100) * 80;
  const stringedHeight = heightOfBox + 'px';
  console.log(stringedHeight);

  function setHeightOfBox() {
    document.documentElement.style.setProperty('--height-box', heightOfBox);
    return;
  }
  useEffect(() => {
    setHeightOfBox();
  }, [day]);
  return (
    <>
      <Activity>
        <ActivityInfo>
          <h2>{act.name}</h2>
          <p>
            {act.startsAt.slice(0, 2)}:{act.startsAt.slice(-2)} - {act.finishesAt.slice(0, 2)}:
            {act.finishesAt.slice(-2)}
          </p>
        </ActivityInfo>
        <ActivityDisp>
          <BsBoxArrowInRight />
          <p>27 vagas</p>
        </ActivityDisp>
      </Activity>
    </>
  );
}

const Activity = styled.div`
  --height-box: 80px;
  width: 268px;
  height: var(--height-box);
  background-color: #f1f1f1;
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
  color: green;
  p {
    font-size: 9px;
  }
`;
