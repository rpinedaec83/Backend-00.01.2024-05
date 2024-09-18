import React, { useContext, useEffect, useState } from 'react';
import axios from '../utils/axiosConfig';
import { AuthContext } from '../contexts/AuthContext';
import { Container, Typography, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import ChatBot from '../components/ChatBot';

const Dashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Obtener los pedidos del usuario
    axios
      .get('/api/orders')
      .then((response) => {
        setOrders(response.data.orders);
      })
      .catch((error) => {
        console.error('Error al obtener los pedidos:', error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bienvenido, {user.name}
        </Typography>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
        <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
          Tus Pedidos
        </Typography>
        <List>
          {orders.map((order) => (
            <ListItem key={order.id}>
              <ListItemText
                primary={`Pedido #${order.id}`}
                secondary={`Total: $${order.totalAmount}`}
              />
            </ListItem>
          ))}
        </List>
        <ChatBot />

        {/* Aquí puedes agregar la funcionalidad para descargar el ebook */}
      </Box>
    </Container>
  );
};

export default Dashboard;
