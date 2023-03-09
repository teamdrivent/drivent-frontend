import styled from 'styled-components';
export default function NotEnrollMessage() {
  return (
    <PaymentContainer>
      <h1>Ingresso e pagamento</h1>
      <StyledDiv>
        <h1>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</h1>
      </StyledDiv>
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 34px;
    margin-bottom: 37px;
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  h1 {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #8e8e8e;
  }
`;
