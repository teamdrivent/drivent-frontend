import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';

export default function WithPay() {
  const token = useToken();
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/hotels`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <WithPayContainer>
      <h1>Escolha de hotel e quarto</h1>
      <HotelList>
        <p>Primeiro escolha seu hotel</p>
        <Hotel>
          <img src=""></img>
          <h2>blabla</h2>
          <h3>Tipos de acomodação</h3>
          <p>fasdfasdf</p>
          <h3>Vagas disponiveis</h3>
          <p>123</p>
        </Hotel>
      </HotelList>
    </WithPayContainer>
  );
}

const WithPayContainer = styled.div`
  font-size: 34px;
  height: 95%;
  h1 {
    margin-bottom: 36px;
  }
`;

const HotelList = styled.div`
  p {
    color: #8e8e8e;
    font-size: 20px;
    margin-bottom: 18px;
  }
`;

const Hotel = styled.div`
  img {
    width: 168px;
    height: 109px;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 12px;
  }
  p {
    margin-bottom: 14px;
    font-size: 12px;
    color: #3c3c3c;
  }
`;
