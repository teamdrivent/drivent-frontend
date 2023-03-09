import { useEffect, useState } from 'react';
import CardPayment from '../../../components/paymentMethod/cardPayment.js';
import PaymentMethod from '../../../components/paymentMethod/paymentMethod.js';
import useTicket from '../../../hooks/api/useTicket.js';
import axios from 'axios';
import useToken from '../../../hooks/useToken.js';
import styled from 'styled-components';
import NotEnrollMessage from '../../../components/paymentMethod/NotEnrollMessage.js';
export default function Payment() {
  const token = useToken();
  const [enrollment, setEnrollment] = useState(null);
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/tickets`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTicket(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/enrollments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEnrollment(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {enrollment !== null ? (
        ticket !== null ? (
          <CardPayment ticket={ticket} />
        ) : (
          <PaymentMethod ticket={ticket} setTicket={setTicket} />
        )
      ) : (
        <NotEnrollMessage />
      )}
    </>
  );
}
