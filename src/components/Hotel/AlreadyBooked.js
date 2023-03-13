import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Hotel from './HotelComponent';
import axios from 'axios';
import useToken from '../../hooks/useToken';

export default function AlreadyBooked({ setBookingId }) {
  const [hotel, setHotel] = useState(null);
  const token = useToken();
  const [booking, setBooking] = useState(null);
  let hotelID;

  useEffect(async() => {
    await axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/booking`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setBooking(res.data);
        hotelID = res.data.Room.hotelId;
      })
      .catch((err) => console.log(err));
       
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/hotels/` + hotelID, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(booking?.id);

  return (
    <AlreadyBookedContainer>
      <h1>Escolha de hotel e quarto</h1>
      <p>Você já escolheu seu quarto:</p>
      {
        booking != null && hotel != null ? 
          <HotelContainer selected={true}>
            <img src={hotel.image}></img>
            <h2>{hotel.name}</h2>
            <h3>Quarto reservado</h3>
            <h4>{booking.Room.name} ({booking.Room.capacity === 1 ? 'Single' : (booking.Room.capacity === 2 ? 'Double' : 'Triple')})</h4>
            <h3>Pessoas no seu quarto</h3>
            <h4>{booking.Room.capacity === 1 ? 'Você' : ('Você e mais ' + (booking.Room.capacity - 1))}</h4>
          </HotelContainer> :
          ''
      }
      <ChangeButton onClick={() => { setBookingId(booking.id); }}>
       TROCAR DE QUARTO
      </ChangeButton>
    </AlreadyBookedContainer>
  );
}

const ChangeButton = styled.button`
  width: 182px;
  height: 37px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border:none;
  margin-top: 45px;
  margin-bottom: 120px;
  cursor: pointer;
`;

const AlreadyBookedContainer = styled.div`
  font-size: 34px;
  height: 95%;
  h1 {
    margin-bottom: 36px;
  }
  p {
    color: #8e8e8e;
    font-size: 20px;
    margin-bottom: 18px;
  }
`;

const HotelContainer = styled.div`
  width: 196px;
  margin-right: 19px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};
  padding: 14px;
  border-radius: 10px;
  img {
    border-radius: 10px;
    width: 168px;
    height: 109px;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 12px;
    font-weight: 500;
  }
  h4 {
    padding-top: 2px;
    padding-bottom: 14px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #3c3c3c;
  }
`;
