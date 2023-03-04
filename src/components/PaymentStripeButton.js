import React, { useContext } from 'react';
import axios from 'axios';
import Button from './Form/Button';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function PaymentStripeButton() {
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const { token } = user.userData;
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
        <button type="submit">Ir para página de pagamento</button>;
      </form>
    </>
  );
}
