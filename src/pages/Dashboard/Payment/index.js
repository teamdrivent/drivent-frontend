import { useEffect, useState } from 'react';
import CardPayment from '../../../components/paymentMethod/cardPayment.js';
import PaymentMethod from '../../../components/paymentMethod/paymentMethod.js';
import useTicket from '../../../hooks/api/useTicket.js';

export default function Payment() {
  let tempTicket = useTicket().ticket;
  const [ticket, setTicket] = useState(tempTicket);
  console.log(ticket);
  useEffect(() => {}, [ticket]);
  return (
    <>
      {ticket !== null ? (
        <CardPayment paid={ticket.status === 'RESERVED'} />
      ) : (
        <PaymentMethod ticket={ticket} setTicket={setTicket} />
      )}
    </>
  );
}
