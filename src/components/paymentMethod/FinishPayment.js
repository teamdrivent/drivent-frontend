import axios from 'axios';
import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import useToken from '../../hooks/useToken';

export default function FinishPayment(props) {
  const { total, ticket, setTicket, totalRender, setTotalRender } = props;
  const token = useToken();
  const totalRenderReal = totalRender.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  setTotalRender(totalRenderReal);
  let body = {};

  if (total === 100) {
    body = {
      ticketTypeId: 1,
    };
  }
  if (total === 600) {
    body = {
      ticketTypeId: 2,
    };
  }
  if (total === 250) {
    body = {
      ticketTypeId: 3,
    };
  }

  function ReservedTicket() {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/tickets`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp);
        const promisse = axios
          .get(`${process.env.REACT_APP_API_BASE_URL}/tickets`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setTicket(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        // setHasTicket(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <FinishPaymentContainer>
      <p>Fechado! O total ficou em R$ {totalRenderReal}. Agora é só confirmar sua compra:</p>
      <BoxReserve onClick={() => ReservedTicket()}>RESERVAR INGRESSO</BoxReserve>
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
