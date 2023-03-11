import { useEffect, useState } from 'react';
import WithoutHotel from '../../../components/Hotel/withouHotel';
import WithoutPay from '../../../components/Hotel/withoutPay';
import WithPay from '../../../components/Hotel/withPay';
import useTicket from '../../../hooks/api/useTicket';
import useToken from '../../../hooks/useToken';
import axios from 'axios';
export default function Hotel() {
  const token = useToken();
  const [ticket, setTicket] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/tickets`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        console.log(res.data);
        setTicket(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {ticket?.ticketTypeId === 1 || ticket?.ticketTypeId === 3 ? <WithoutHotel /> : ''}
      {ticket?.status !== 'PAID' ? <WithoutPay /> : ''}
      {ticket?.ticketTypeId === 2 && ticket?.status === 'PAID' ? <WithPay /> : ''}
    </>
  );
}
