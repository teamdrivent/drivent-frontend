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
        console.log(res.data);
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
      {ticket?.status !== 'PAID' ? (
        <WithoutPay />
      ) : booking ? (
        <AlreadyBooked setBookingId={setBookingId} />
      ) : ticket?.ticketTypeId === 1 || ticket?.ticketTypeId === 3 ? (
        <WithoutHotel />
      ) : (
        <WithPay bookingId={bookingId} setBooking={setBooking} setBookingId={setBookingId} />
      )}
    </>
  );
}
