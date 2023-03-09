import { useEffect, useState } from 'react';
import CardPayment from '../../../components/paymentMethod/cardPayment.js';
import PaymentMethod from '../../../components/paymentMethod/paymentMethod.js';
import useTicket from '../../../hooks/api/useTicket.js';
import axios from 'axios';
import useToken from '../../../hooks/useToken.js';
export default function Payment() {
  const token = useToken();
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
  }, []);
  return (
    <>{ticket !== null ? <CardPayment ticket={ticket} /> : <PaymentMethod ticket={ticket} setTicket={setTicket} />}</>
  );
}
