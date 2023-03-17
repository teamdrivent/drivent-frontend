import styled from 'styled-components';
import BigBoxOfActivies from './bigBoxOfActivies';

export default function DayOfEvent({ activities, day }) {
  const fridayActivities = activities.filter((i) => i.date === '03/04/2023');
  const saturdayActivities = activities.filter((i) => i.date === '04/04/2023');
  const sundayActivities = activities.filter((i) => i.date === '05/04/2023');
  return (
    <>
      {day !== 0 && <RoomTitles>
        <p>Auditório Principal</p>
        <p>Auditório Lateral</p>
        <p>Sala de Workshop</p>
      </RoomTitles>}
      {day === 1 && <BigBoxOfActivies dayActivities={fridayActivities} day={day}/>}
      {day === 2 && <BigBoxOfActivies dayActivities={saturdayActivities} day={day}/>}
      {day === 3 && <BigBoxOfActivies dayActivities={sundayActivities} day={day}/>}
    </>
  );
}
const RoomTitles = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: Roboto;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #7b7b7b;
  margin-top: 60px;
  margin-bottom: 7px;
`;
