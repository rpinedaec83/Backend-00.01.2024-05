import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }} className="flex flex-col items-center">
        <Typography variant="h1" component="h1" className="text-6xl font-bold text-gray-800 mb-4">
          404
        </Typography>
        <Typography variant="h5" component="p" className="text-xl text-gray-600 mb-6">
          Lo sentimos, la página que buscas no existe.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          onClick={handleGoHome}
          sx={{ mt: 2, width: '100%' }}
          className="bg-blue-500 hover:bg-blue-700 w-full"
        >
          Volver al Inicio
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
