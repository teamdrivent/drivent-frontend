import styled from 'styled-components';

export default function FinishPayment(props) {
  const { total } = props;
  return (
    <FinishPaymentContainer>
      <p>Fechado! O total ficou em R$ {total}. Agora é só confirmar:</p>
      <BoxReserve>RESERVAR INGRESSO</BoxReserve>
    </FinishPaymentContainer>
  );
}

const FinishPaymentContainer = styled.div``;

const BoxReserve = styled.div`
  width: 162px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: #e0e0e0;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  :hover {
    background-color: #ccc;
  }
`;
