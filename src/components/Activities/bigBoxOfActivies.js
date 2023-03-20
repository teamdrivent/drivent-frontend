import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ActivityComponent from './activity';
import useToken from '../../hooks/useToken';

export default function BigBoxOfActivies({ dayActivities, day }) {
  const principalActivities = dayActivities.filter((act) => act.place === 'principal');
  const lateralActivities = dayActivities.filter((act) => act.place === 'lateral');
  const workshopActivities = dayActivities.filter((act) => act.place === 'workshop');
  const [reserveds, setReserveds] = useState([]);
  const token = useToken();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/activities/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setReserveds(res.data);
      })
      .catch((err) => {
        console.log(err.error);
      });
  }, []);

  return (
    <BoxOfActivities>
      <BoxActivity>
        {principalActivities.map((act) => (
          <ActivityComponent
            key={act.id}
            reserveds={reserveds} 
            setReserveds={setReserveds} 
            act={act} 
            day={day} 
            heightOfBox={((Number(act.finishesAt) - Number(act.startsAt)) / 100) * 80}
            reserved={find(reserveds, act.id)}
          />
        ))}
      </BoxActivity>
      <BoxActivity>
        {lateralActivities.map((act) => (
          <ActivityComponent 
            key={act.id}
            reserveds={reserveds} 
            setReserveds={setReserveds} 
            act={act} 
            day={day} 
            heightOfBox={((Number(act.finishesAt) - Number(act.startsAt)) / 100) * 80}
            reserved={find(reserveds, act.id)}
          />
        ))}
      </BoxActivity>
      <BoxActivity>
        {workshopActivities.map((act) => (
          <ActivityComponent 
            key={act.id}
            reserveds={reserveds} 
            setReserveds={setReserveds} 
            act={act} 
            day={day} 
            heightOfBox={((Number(act.finishesAt) - Number(act.startsAt)) / 100) * 80}
            reserved={find(reserveds, act.id)}
          />
        ))}
      </BoxActivity>
    </BoxOfActivities>
  );
}

function find(reserveds, id) {
  let find = -1;
  reserveds.forEach(reserve => {
    if(reserve.activityId === id) {
      find = reserve.id;
    }
  });

  return find;
}

const BoxOfActivities = styled.div`
  display: flex;
`;

const BoxActivity = styled.div`
  width: 288px;
  height: 420px;
  border: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
