import styled from 'styled-components';
import ActivityComponent from './activity';

export default function BigBoxOfActivies({ dayActivities, day }) {
  const principalActivities = dayActivities.filter((act) => act.place === 'principal');
  const lateralActivities = dayActivities.filter((act) => act.place === 'lateral');
  const workshopActivities = dayActivities.filter((act) => act.place === 'workshop');
  return (
    <BoxOfActivities>
      <BoxActivity>
        {principalActivities.map((act) => (
          <ActivityComponent act={act} day={day} heightOfBox={((Number(act.finishesAt) - Number(act.startsAt)) / 100) * 80}/>
        ))}
      </BoxActivity>
      <BoxActivity>
        {lateralActivities.map((act) => (
          <ActivityComponent act={act} day={day} heightOfBox={((Number(act.finishesAt) - Number(act.startsAt)) / 100) * 80}/>
        ))}
      </BoxActivity>
      <BoxActivity>
        {workshopActivities.map((act) => (
          <ActivityComponent act={act} day={day} heightOfBox={((Number(act.finishesAt) - Number(act.startsAt)) / 100) * 80}/>
        ))}
      </BoxActivity>
    </BoxOfActivities>
  );
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
