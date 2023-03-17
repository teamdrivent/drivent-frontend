import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import axios from 'axios';
import DayOfEvent from './dayOfEvent';

export default function LiveActivities() {
  const [activities, setActivities] = useState([]);
  const [day, setDay] = useState(0);
  const token = useToken();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/activities`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => {
        console.log(err.error);
      });
  }, []);

  return (
    <Page>
      <h1>Escolha de atividades</h1>
      {day === 0 && <h3>Primeiro, filtre pelo dia do evento</h3>}
      <Top>
        {day === 1 ? (
          <button className="yellow">Sexta, 03/04 </button>
        ) : (
          <button onClick={() => setDay(1)}>Sexta, 03/04 </button>
        )}
        {day === 2 ? (
          <button className="yellow">Sábado, 04/04 </button>
        ) : (
          <button onClick={() => setDay(2)}>Sábado, 04/04 </button>
        )}
        {day === 3 ? (
          <button className="yellow">Domingo, 05/04 </button>
        ) : (
          <button onClick={() => setDay(3)}>Domingo, 05/04 </button>
        )}
      </Top>
      <DayOfEvent activities={activities} day={day} />
    </Page>
  );
}
const Page = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 40px;
  }
  h3 {
    margin-top: 36px;
    color: #8E8E8E;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
  }
`;

const Top = styled.div`
  display: flex;
  button {
    height: 37px;
    width: 131px;
    border-radius: 4px;
    margin-top: 28px;
    margin-right: 17px;
    background: #e0e0e0;
    font-family: 'Roboto';
    font-size: 14px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border: 1px solid #e0e0e0;
  }

  .yellow {
    background: #ffd37d;
  }
`;
