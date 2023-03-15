import styled from 'styled-components';

export default function MethodOnline() {
  return (
    <WhithoutHotelContainer>
      <h1>Escolha de atividade</h1>
      <MessageWithoutHotel>
        <p>Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.</p>
      </MessageWithoutHotel>
    </WhithoutHotelContainer>
  );
}

const WhithoutHotelContainer = styled.div`
  font-size: 34px;
  height: 95%;
`;

const MessageWithoutHotel = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
    color: #8e8e8e;
  }
`;
