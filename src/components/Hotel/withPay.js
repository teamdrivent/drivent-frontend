import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import RoomsList from '../RenderHotelsAndRooms/RoomsList';
import Hotel from './HotelComponent';

export default function WithPay({ bookingId, setBooking, setBookingId }) {
  const token = useToken();
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(0);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/hotels`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setHotels(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleHotelSelect(id) {
    setSelectedHotelId(id);
  }

  return (
    <WithPayContainer>
      <h1>Escolha de hotel e quarto</h1>
      <p>Primeiro escolha seu hotel</p>
      <HotelList>
        {hotels.map((res) => {
          return (
            <Hotel
              image={res.image}
              name={res.name}
              rooms={res.Rooms}
              key={res.id}
              id={res.id}
              setRooms={setRooms}
              selected={selectedHotelId === res.id}
              handleSelect={handleHotelSelect}
            />
          );
        })}
      </HotelList>
      {selectedHotelId !== 0 ? (
        <RoomsList
          HotelId={selectedHotelId}
          setBooking={setBooking}
          setBookingId={setBookingId}
          bookingId={bookingId}
          HotelRooms={rooms}
          selectedHotelId={selectedHotelId}
        />
      ) : null}
    </WithPayContainer>
  );
}

const WithPayContainer = styled.div`
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

const HotelList = styled.div`
  display: flex;
`;
