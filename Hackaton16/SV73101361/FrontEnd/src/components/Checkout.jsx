import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@mui/material';
import axios from '../utils/axiosConfig';

const stripePromise = loadStripe('TU_CLAVE_PUBLICA_DE_STRIPE');

const Checkout = ({ courseId }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Crear una intención de pago en el backend
    const response = await axios.post('/api/orders', {
      items: [{ courseId, quantity: 1 }],
    });

    const { clientSecret } = response.data;

    // Redirigir al formulario de pago (si usas Checkout Session)
    const { error } = await stripe.redirectToCheckout({
      sessionId: clientSecret,
    });

    if (error) {
      console.error('Error al redirigir al checkout:', error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleCheckout}>
      Comprar Curso
    </Button>
  );
};

export default Checkout;
