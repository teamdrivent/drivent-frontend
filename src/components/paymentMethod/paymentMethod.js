import { useState } from 'react';
import styled from 'styled-components';
import PaymentInPerson from './paymentInPerson';
import FinishPayment from './FinishPayment';

export default function PaymentMethod(props) {
  const { setHasTicket } = props;
  const [method, setMethod] = useState('');
  const [withOrWithoutHotel, setWithOrWithoutHotel] = useState(false);
  const [total, setTotal] = useState(0);
  const [colorSelectInPerson, setColorSelectInPerson] = useState('');
  const [colorOnline, setcolorOnline] = useState('');

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
            }}
          >
            <p>Presencial</p>
            <p>R$ 250</p>
          </InPersonMethod>
          <OnlineMethod
            background={colorOnline}
            onClick={() => {
              setMethod('Online');
              setWithOrWithoutHotel(false);
              setTotal(100);
              setColorSelectInPerson('');
              setcolorOnline('#FFEED2');
            }}
          >
            <p>Online</p>
            <p>R$ 100</p>
          </OnlineMethod>
        </Methods>
        {method === 'Presencial' ? (
          <PaymentInPerson setWithOrWithoutHotel={setWithOrWithoutHotel} setTotal={setTotal} />
        ) : (
          ''
        )}
        {method === 'Online' ? <FinishPayment total={total} setHasTicket={setHasTicket} /> : ''}
        {withOrWithoutHotel ? <FinishPayment total={total} setHasTicket={setHasTicket} /> : ''}
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
