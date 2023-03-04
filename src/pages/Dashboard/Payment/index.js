import CardPayment from '../../../components/paymentMethod/cardPayment.js';
import PaymentMethod from '../../../components/paymentMethod/paymentMethod.js';
import useTicket from '../../../hooks/api/useTicket.js';

export default function Payment() {
  let { ticket } = useTicket();
  console.log(ticket!==null);
  return (
    <>
      {
        ticket !== null ? <CardPayment paid={ticket.status==='PAID'} /> : <PaymentMethod/>
      }
    </>
  );
}
