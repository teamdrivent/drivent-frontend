import { useEffect, useState } from 'react';
import axios from 'axios';
import useToken from '../../../hooks/useToken';
import WithoutPayActivities from '../../../components/Activities/withoutPayActivities';
import MethodOnline from '../../../components/Activities/MethodOnline';
import LiveActivities from '../../../components/Activities/liveActivities';

export function Activities() {
  const [ticket, setTicket] = useState(null);
  const token = useToken();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/tickets`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setTicket(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* {ticket?.status !== 'PAID' ? <WithoutPayActivities /> : ''}
      {ticket?.ticketTypeId === 1 || ticket?.ticketTypeId === 3 ? <MethodOnline /> : <LiveActivities />} */}
      <LiveActivities/>
    </>
  );
}
