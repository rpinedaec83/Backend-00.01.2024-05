import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, IconButton } from '@mui/material';
import Checkout from '../components/Checkout';
import ChatBot from '../components/ChatBot';
import LoginPage from './LoginPages'; // Importa el componente de Login
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';

// Simulación de cursos
const courses = [
  {
    id: 1,
    title: 'Curso de JavaScript',
    description: 'Aprende JavaScript desde cero.',
    price: 49.99,
  },
  // Agrega más cursos según sea necesario
];

const HomePage = () => {
  // Estado para mostrar u ocultar el chatbot
  const [showChatBot, setShowChatBot] = useState(false);

  // Función para alternar el chatbot
  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <Container maxWidth="lg">
      {/* Sección de Login */}
      <div className="mb-8">
        <LoginPage /> {/* El componente de login se mostrará al inicio */}
      </div>

      {/* Cursos */}
      <Typography variant="h3" component="h1" className="mt-8 text-center">
        Bienvenido a la Plataforma de Cursos
      </Typography>
      <Grid container spacing={4} className="mt-4">
        {courses.map((course) => (
          <Grid item xs={12} md={4} key={course.id}>
            <Card className="hover:shadow-xl">
              <CardContent>
                <Typography variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mt-2">
                  {course.description}
                </Typography>
                <Typography variant="h6" component="div" className="mt-4">
                  ${course.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Checkout courseId={course.id} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Botón de Toggle para el ChatBot */}
      <div className="fixed bottom-4 left-4">
        <IconButton
          onClick={toggleChatBot}
          color="primary"
          size="large"
          className="bg-blue-500 hover:bg-blue-700 text-white"
        >
          {showChatBot ? <CloseIcon /> : <ChatIcon />}
        </IconButton>

        {/* ChatBot en la esquina inferior izquierda con Toggle */}
        {showChatBot && (
          <div className="fixed bottom-16 left-4 w-72 h-96 bg-white shadow-lg rounded-lg p-4">
            <ChatBot />
          </div>
        )}
      </div>
    </Container>
  );
};

export default HomePage;
