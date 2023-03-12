import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function Hotel({ id, image, name, rooms, selected, handleSelect }) {
  const [acomodationType, setAcomodationType] = useState('');
  function selectHotel() {
    handleSelect(id);
    console.log(rooms);
  }

  useEffect(() => {
    let maxCapacity = 0;
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].capacity > maxCapacity) {
        maxCapacity = rooms[i].capacity;
      }
    }
    if (maxCapacity === 1) {
      setAcomodationType('Single');
    } else if (maxCapacity === 2) {
      setAcomodationType('Single e Double');
    } else {
      setAcomodationType('Single, Double e Triple');
    }
  }, []);

  return (
    <HotelsContainer>
      <HotelContainer onClick={selectHotel} selected={selected}>
        <img src={image}></img>
        <h2>{name}</h2>
        <h3>Tipos de acomodação</h3>
        <h4>{acomodationType}</h4>
        <h3>Vagas disponíveis</h3>
        <h4>{acomodationType}</h4>
      </HotelContainer>
    </HotelsContainer>
  );
}

const HotelsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const HotelContainer = styled.div`
  width: 196px;
  margin-right: 19px;
  background-color: ${(props) => (props.selected ? '#FFEED2' : '#ebebeb')};
  padding: 14px;
  border-radius: 10px;
  cursor: pointer;
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
