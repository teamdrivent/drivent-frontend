import styled from 'styled-components';
import { useState } from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import RenderCapacityIcon from './RenderCapacityIcon.js';
export default function Room({ data, selectRooms, setSelectRooms, index, selected }) {
  const [select, setSelect] = useState(false);
  const reservados = 1; //apenas para simular possiveis reservas dos quartos

  function chooseRoom() {
    const isUnavailable = data.capacity === reservados;
    if(!isUnavailable) {
      setSelectRooms(index);
    }
  }

  const isUnavailable = data.capacity === reservados;

  return (
    <OneRoom onClick={chooseRoom} bool={selected} unavailable={isUnavailable}>
      {data.name}
      <div>
        <RenderCapacityIcon capacity={data.capacity} select={selected} reservados={reservados} />
      </div>
    </OneRoom>
  );
}

const OneRoom = styled.div`
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  display: flex;
  margin-right: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: #454545;
  font-weight: 700;
  padding: 10px;
  background-color: ${(props) => (props.bool === false ? null : '#FFEED2')};
  cursor: ${(props) => (props.unavailable ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.unavailable ? '#CECECE' : props.bool ? '#FFEED2' : null)};
`;
