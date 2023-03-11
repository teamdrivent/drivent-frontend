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
  const [update, setUpdate] = useState(false);
  const [isMounting, setIsMounting] = useState(true);

  useEffect(() => {
    if (isMounting) {
      axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/tickets`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
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
      return () => {
        setIsMounting(false);
      };
    }
  }, [ticket]);
  return (
    <>
      {enrollment !== null ? (
        ticket !== null ? (
          <CardPayment ticket={ticket} update={update} />
        ) : (
          <PaymentMethod ticket={ticket} setTicket={setTicket} />
        )
      ) : (
        <NotEnrollMessage />
      )}
    </>
  );
}
