import { useState } from 'react';
import styled from 'styled-components';
import PaymentInPerson from './paymentInPerson';
import FinishPayment from './FinishPayment';

export default function PaymentMethod() {
  const [method, setMethod] = useState('');

  console.log(method);

  return (
    <>
      <PaymentContainer>
        <h1>Ingresso e pagamento</h1>
        <p>Primeiro, escolha sua modalidade de ingresso</p>
        <Methods>
          <InPersonMethod onClick={() => setMethod('Presencial')}>
            <p>Presencial</p>
            <p>R$ 250</p>
          </InPersonMethod>
          <OnlineMethod onClick={() => setMethod('Online')}>
            <p>Online</p>
            <p>R$ 100</p>
          </OnlineMethod>
        </Methods>
        <PaymentInPerson />
        <FinishPayment />
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

  p:nth-child(1) {
    color: #454545;
  }

  :hover {
    background-color: #ccc;
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

  p:nth-child(1) {
    color: #454545;
  }

  :hover {
    background-color: #ccc;
  }

  cursor: pointer;
`;

const Methods = styled.div`
  display: flex;
  margin-bottom: 44px;
`;
