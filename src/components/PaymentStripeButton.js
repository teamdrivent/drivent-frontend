import React, { useContext } from 'react';
import axios from 'axios';
import Button from './Form/Button';
import useToken from '../hooks/useToken';

export default function PaymentStripeButton() {
  const token = useToken();
  function goToPaymentPage(e) {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/payments/create-checkout-session`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        window.location.href = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <form onSubmit={goToPaymentPage}>
        <Button type="submit">FINALIZAR PAGAMENTO</Button>
      </form>
    </>
  );
}
