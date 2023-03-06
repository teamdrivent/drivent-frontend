import { useEffect, useState } from 'react';
import CardPayment from '../../../components/paymentMethod/cardPayment.js';
import PaymentMethod from '../../../components/paymentMethod/paymentMethod.js';
import useTicket from '../../../hooks/api/useTicket.js';

export default function Payment() {
  const [hasTicket, setHasTicket] = useState(false);
  let { ticket } = useTicket();
  useEffect(() => {
  }, [hasTicket]);
  return (
    <>
      {ticket !== null ? (
        <CardPayment paid={ticket.status === 'RESERVED'} />
      ) : (
        <PaymentMethod setHasTicket={setHasTicket} />
      )}
    </>
  );
}
