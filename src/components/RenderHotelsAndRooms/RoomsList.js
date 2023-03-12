import { useState } from 'react';
import styled from 'styled-components';
import Room from './Room';
export default function RoomsList({ HotelId, HotelRooms }) {
  const filterRooms = HotelRooms.filter((e) => e.hotelId === HotelId);
  const [selectRooms, setSelectRooms] = useState();
  return (
    <Rooms>
      <h2>Ótima pedida! Agora escolha seu quarto:</h2>
      <AllRooms>
        {filterRooms.map((e, i) => {
          return <Room data={e} key={i} index={i} setSelectRooms={setSelectRooms} selectRooms={selectRooms} selected={selectRooms===i } />;
        })}
      </AllRooms>
    </Rooms>
  );
}
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
  height: 220px;
`;
