import styled from 'styled-components';
import Room from './Room';
export default function RoomsList({ RoomsApi }) {
  return (
    <Rooms>
      <h2>Ótima pedida! Agora escolha seu quarto:</h2>
      <AllRooms>
        {RoomsApi.map((e, i) => {
          return <Room data={e} />;
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
