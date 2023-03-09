import styled from 'styled-components';
import ShowRooms from './ShowRooms';
export default function ShowHotels() { 
  const RoomsApi = [{
    name: '101',
    capacity: 1,
  }, {
    name: '102',
    capacity: 2,
  }, {
    name: '103',
    capacity: 1,
  }, {
    name: '104',
    capacity: 1,
  }, {
    name: '105',
    capacity: 1,
  }, {
    name: '106',
    capacity: 2,
  }, {
    name: '107',
    capacity: 2,
  }, {
    name: '108',
    capacity: 1,
  }, {
    name: '109',
    capacity: 1,
  }, {
    name: '110',
    capacity: 1,
  }, {
    name: '111',
    capacity: 2,
  }, {
    name: '112',
    capacity: 2,
  }, {
    name: '113',
    capacity: 1,
  }, {
    name: '114',
    capacity: 1,
  }, {
    name: '115',
    capacity: 2,
  }, {
    name: '116',
    capacity: 2,
  }];
  return (<>
    <Hotels>
      <h1>Escolha um hotel e quarto</h1>
      <h2>Primeiro, escolha seu hotel</h2>
    </Hotels>
    <ShowRooms RoomsApi={RoomsApi}/>
  </>
  );
}

const Hotels = styled.div`
    h1{
        font-size: 34px;
    }
    h2{
        font-size: 20px;
        color:#8E8E8E;
        margin-top: 36px;
    }
`;
const Rooms = styled.div`
`;
