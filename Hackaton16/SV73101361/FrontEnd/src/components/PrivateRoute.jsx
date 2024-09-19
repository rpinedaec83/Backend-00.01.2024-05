import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Si el usuario no está autenticado, redirigir a /login
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, renderizar el componente hijo
  return children;
};

export default PrivateRoute;
