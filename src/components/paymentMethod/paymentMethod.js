import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentInPerson from './paymentInPerson';
import FinishPayment from './FinishPayment';
import axios from 'axios';
import useToken from '../../hooks/useToken';

export default function PaymentMethod(props) {
  const { ticket, setTicket } = props;
  const [method, setMethod] = useState('');
  const [withOrWithoutHotel, setWithOrWithoutHotel] = useState(false);
  const [total, setTotal] = useState(0);
  const [colorSelectInPerson, setColorSelectInPerson] = useState('');
  const [colorOnline, setcolorOnline] = useState('');
  const [respServerPosition0, setRespServerPosition0] = useState([]);
  const [respServerPosition1, setRespServerPosition1] = useState([]);
  const [totalRender, setTotalRender] = useState(0);
  const token = useToken();

  useEffect(() => {
    const promisse = axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/tickets/types`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp.data);
        setRespServerPosition0(resp.data[0]);
        setRespServerPosition1(resp.data[1]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PaymentContainer>
        <h1>Ingresso e pagamento</h1>
        <p>Primeiro, escolha sua modalidade de ingresso</p>
        <Methods>
          <InPersonMethod
            background={colorSelectInPerson}
            onClick={() => {
              setMethod('Presencial');
              setColorSelectInPerson('#FFEED2');
              setcolorOnline('');
              setTotal(250);
              setTotalRender(respServerPosition1.price/100);
            }}
          >
            <p>{respServerPosition1.name}</p>
            <p>R$ {respServerPosition1.price / 100}</p>
          </InPersonMethod>
          <OnlineMethod
            background={colorOnline}
            onClick={() => {
              setMethod('Online');
              setWithOrWithoutHotel(false);
              setTotal(100);
              setColorSelectInPerson('');
              setcolorOnline('#FFEED2');
              setTotalRender(respServerPosition0.price/100);
            }}
          >
            <p>{respServerPosition0.name}</p>
            <p>R$ {respServerPosition0.price / 100}</p>
          </OnlineMethod>
        </Methods>

        {method === 'Presencial' ? (
          <PaymentInPerson
            setWithOrWithoutHotel={setWithOrWithoutHotel}
            setTotal={setTotal}
            setTotalRender={setTotalRender}
            respServerPosition1={respServerPosition1}
            respServerPosition0={respServerPosition0}
            totalRender={totalRender}
          />
        ) : (
          ''
        )}
        {method === 'Online' ? (
          <FinishPayment
            total={total}
            ticket={ticket}
            setTicket={setTicket}
            totalRender={totalRender}
            setTotalRender={setTotalRender}
          />
        ) : (
          ''
        )}
        {withOrWithoutHotel ? (
          <FinishPayment
            total={total}
            ticket={ticket}
            setTicket={setTicket}
            totalRender={totalRender}
            setTotalRender={setTotalRender}
          />
        ) : (
          ''
        )}
      </PaymentContainer>
    </>
  );
}

const PaymentContainer = styled.div`
  h1 {
    font-size: 34px;
    margin-bottom: 37px;
  }
  p {
    color: #8e8e8e;
    margin-bottom: 17px;
  }
`;

const InPersonMethod = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 10px;
  border: 1px solid #cecece;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  background-color: ${(props) => props.background};
  p:nth-child(1) {
    color: #454545;
  }

  :hover {
    background-color: #ffeed2;
  }

  cursor: pointer;
`;

const OnlineMethod = styled.div`
  width: 145px;
  height: 145px;
  border-radius: 10px;
  border: 1px solid #cecece;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  p:nth-child(1) {
    color: #454545;
  }

  :hover {
    background-color: #ffeed2;
  }

  cursor: pointer;
`;

const Methods = styled.div`
  display: flex;
  margin-bottom: 44px;
`;
