import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Google as GoogleIcon, GitHub as GitHubIcon } from '@mui/icons-material';

const BACKEND_URL = 'http://localhost:5000'; // Ajusta la URL según corresponda

const LoginPage = () => {
  const handleLogin = (provider) => {
    window.location.href = `${BACKEND_URL}/api/auth/${provider}`;
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Iniciar Sesión
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<GoogleIcon />}
          onClick={() => handleLogin('google')}
          sx={{ mt: 2, width: '100%' }}
        >
          Iniciar sesión con Google
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<GitHubIcon />}
          onClick={() => handleLogin('github')}
          sx={{ mt: 2, width: '100%' }}
        >
          Iniciar sesión con GitHub
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
