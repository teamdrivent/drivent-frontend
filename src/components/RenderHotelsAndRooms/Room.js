import styled from 'styled-components';
import { useState } from 'react';
import { HiOutlineUser } from 'react-icons/hi';
export default function Room({ data }) {
  const [select, setSelect] = useState(false);
  return (
    <OneRoom onClick={() => select===false?setSelect(true):setSelect(false)} bool={select}>{data.name}<div>{data.capacity === 2 ?<><HiOutlineUser fontSize={'22.25px'}/><HiOutlineUser fontSize={'22.25px'}/></>:<HiOutlineUser fontSize={'22.25px'}/>}</div></OneRoom>
  );
}

const OneRoom = styled.div`

width:190px;
height:45px;
border: 1px solid #CECECE;
border-radius: 10px;
display:flex;
margin-right: 20px;
align-items:center;
justify-content:space-between;
font-size: 20px;
color:#454545;
font-weight: 700;
padding:10px;
background-color:${props => props.bool ===false?null:'#FFEED2'};
`
;
