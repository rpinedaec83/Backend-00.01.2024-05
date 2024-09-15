import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@mui/material';
import axios from '../utils/axiosConfig';

// Cargar Stripe con tu clave pública
const stripePromise = loadStripe('pk_test_51Pz5mwHPZjnsfqM1Kb3T08Vb873Wp1QUrXQvjwyZdjFUsDqsl3JoEyTBPRrrc5V47mLNxotRRWz97BR6wgjzMdAx00smlQsB51');

const Checkout = ({ courseId }) => {
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      // Solicitar la creación de una sesión de Checkout en el backend
      const response = await axios.post('/api/orders/create-checkout-session', {
        items: [{ courseId, quantity: 1 }],
      });

      const { sessionId } = response.data; // Obtener sessionId del backend

      // Redirigir a Stripe Checkout usando el sessionId
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error('Error al redirigir al checkout:', error);
      }
    } catch (error) {
      console.error('Error durante el proceso de checkout:', error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleCheckout}>
      Comprar Curso
    </Button>
  );
};

export default Checkout;
