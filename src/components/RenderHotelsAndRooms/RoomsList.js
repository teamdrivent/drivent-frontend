import { useState } from 'react';
import styled from 'styled-components';
import Room from './Room';
import axios from 'axios';
import useToken from '../../hooks/useToken';

export default function RoomsList({ bookingId, setBookingId, setBooking, HotelId, HotelRooms }) {
  const filterRooms = HotelRooms.filter((e) => e.hotelId === HotelId);
  const [selectRooms, setSelectRooms] = useState();
  const token = useToken();

  async function booking() {
    if(bookingId !== false) {
      axios
        .put(`${process.env.REACT_APP_API_BASE_URL}/booking/` + bookingId, { roomId: filterRooms[selectRooms].id }, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setBooking(res.data);
          setBookingId(false);
        })
        .catch((err) => console.log(err));
    }
    else {
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/booking`, { roomId: filterRooms[selectRooms].id }, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setBooking(res.data);
          setBookingId(false);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Rooms>
      <h2>Ótima pedida! Agora escolha seu quarto:</h2>
      <AllRooms>
        {filterRooms.map((e, i) => {
          return <Room data={e} key={i} index={i} setSelectRooms={setSelectRooms} selectRooms={selectRooms} selected={selectRooms===i } />;
        })}
      </AllRooms>
      {
        selectRooms !== undefined ? 
          <ChangeButton onClick={() => {booking();}}>
            RESERVAR QUARTO
          </ChangeButton> :
          ''
      }
    </Rooms>
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

const Rooms = styled.div`
  h2 {
    font-size: 20px;
    color: #8e8e8e;
    margin-top: 36px;
    margin-bottom: 36px;
  }
`;
const AllRooms = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
