import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import axios from '../utils/axiosConfig';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      // Almacenar el token en localStorage o en una cookie
      localStorage.setItem('token', token);
      
      // Configurar axios para incluir el token en los headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Obtener el perfil del usuario
      axios.get('/api/users/profile').then((response) => {
        setUser(response.data.user);
        navigate('/dashboard');
      }).catch((error) => {
        console.error('Error al obtener el perfil del usuario:', error);
        localStorage.removeItem('token');
        navigate('/login');
      });
    } else {
      navigate('/login');
    }
  }, [location, navigate, setUser]);

  return <div>Procesando autenticación...</div>;
};

export default OAuthCallback;
