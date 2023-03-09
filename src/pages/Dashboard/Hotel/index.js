import WithoutHotel from '../../../components/Hotel/withouHotel';
import WithoutPay from '../../../components/Hotel/withoutPay';
import WithPay from '../../../components/Hotel/withPay';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
  const ticket = useTicket();
  //{ticket.status !== 'PAID' ? <WithoutPay /> : ''}
  //{ticket.ticketType === 1 || ticket.ticketType === 3 ? <WithoutHotel /> : ''}

  return (
    <>
      <WithPay />
    </>
  );
}
