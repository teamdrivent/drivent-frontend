import { useState } from 'react';
import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import Button from '../../components/Form/Button';
import { HiCheckCircle } from 'react-icons/hi';

export default function CardPayment() {
  const [method, setMethod] = useState('');
  const [withOrWithoutHotel, setWithOrWithoutHotel] = useState(false);
  const [total, setTotal] = useState(0);
  const [colorSelectInPerson, setColorSelectInPerson] = useState('');
  const { ticket } = useTicket();

  console.log(ticket);

  return (
    <>
      <PaymentContainer>
        <h1>Ingresso e pagamento</h1>
        <p>Ingresso escolhido</p>
        <Methods>
          <ChosenTicket
            background={colorSelectInPerson}
          >
            <p>
              {ticket?.TicketType.name}
              {
                ticket?.TicketType.isRemote === true ? 
                  '' :
                  ticket?.TicketType.includesHotel === true ? 
                    ' + Com Hotel' :
                    ' - Sem Hotel'
              }
            </p>
            <p>R$ {ticket?.TicketType.price}</p>
          </ChosenTicket>
        </Methods>
        <p>Pagamento</p>
        {
          ticket?.TicketType.status === 'PAID' ? 
            <PaidContainer>
              <HiCheckCircle/>
              <PaidText>
                <p>Pagamento confirmado!</p>
                <p>Prossiga para escolha de hospedagem e atividades</p>
              </PaidText>
            </PaidContainer> : 
            <Button type="submit">FINALIZAR PAGAMENTO</Button>
        }

      </PaymentContainer>
    </>
  );
}

const PaidContainer = styled.div`
  display: flex;
  & > *:first-child {
    font-size: 40px;
    color: #36B853;
  }
`;

const PaidText = styled.div`
  & > p:first-child{
    color: black;
    margin-bottom: 5px;
    font-weight: 700;
  }


`;

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

const ChosenTicket = styled.div`
  width: 290px;
  height: 145px;
  border-radius: 10px;
  border: 1px solid #cecece;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  background-color: #FFEED2;
  p:nth-child(1) {
    color: #454545;
  }
`;

const Methods = styled.div`
  display: flex;
  margin-bottom: 44px;
`;
