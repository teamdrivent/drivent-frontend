import { useState } from 'react';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
export default function RenderCapacityIcon({ capacity, select, reservados }) {
  const list = [];
  if (select === true) {
    let isPinkAdded = false; // variável para controlar se o ícone rosa já foi adicionado
    for (let i = 0; i < capacity; i++) {
      if (i === 0 && !isPinkAdded) {
        // adiciona o primeiro ícone rosa caso não tenha sido adicionado ainda
        list.push(
          <BsPersonFill color={capacity === reservados ? '#8C8C8C' : '#FF4791'} key={i} fontSize={'22.25px'} />
        );
        isPinkAdded = true; // marca que o ícone rosa foi adicionado
      } else if (i < capacity - reservados) {
        list.push(<BsPerson key={i} fontSize={'22.25px'} />);
      } else {
        list.push(
          <BsPersonFill color={capacity === reservados ? '#8C8C8C' : '#8C8C8C'} key={i} fontSize={'22.25px'} />
        );
      }
    }
  } else {
    if (reservados > 0) {
      for (let i = 0; i < capacity; i++) {
        if (i < capacity - reservados) {
          list.push(<BsPerson key={i} fontSize={'22.25px'} />);
        } else {
          list.push(
            <BsPersonFill color={capacity === reservados ? '#8C8C8C' : undefined} key={i} fontSize={'22.25px'} />
          );
        }
      }
    } else {
      for (let i = 0; i < capacity; i++) {
        list.push(<BsPerson key={i} fontSize={'22.25px'} />);
      }
    }
  }

  return list;
}
