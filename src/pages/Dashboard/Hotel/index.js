import { useEffect, useState } from 'react';
import WithoutHotel from '../../../components/Hotel/withouHotel';
import WithoutPay from '../../../components/Hotel/withoutPay';
import WithPay from '../../../components/Hotel/withPay';
import useToken from '../../../hooks/useToken';
import axios from 'axios';
import AlreadyBooked from '../../../components/Hotel/AlreadyBooked';

export default function Hotel() {
  const token = useToken();
  const [ticket, setTicket] = useState(null);
  const [booking, setBooking] = useState(null);
  const [bookingId, setBookingId] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/tickets`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setTicket(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/booking`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setBooking(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {
        booking == undefined || bookingId !== false? 
          (
            (ticket?.ticketTypeId === 1 || ticket?.ticketTypeId === 3 ? <WithoutHotel /> : ''),
            (ticket?.status !== 'PAID' ? <WithoutPay /> : ''),
            (ticket?.ticketTypeId === 2 && ticket?.status === 'PAID' ? <WithPay bookingId={bookingId} setBooking={setBooking} setBookingId={setBookingId} /> : '')
          ) : 
          <AlreadyBooked setBookingId={setBookingId}/>
      }
    </>
  );
}
