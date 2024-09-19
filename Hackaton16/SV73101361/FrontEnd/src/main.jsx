import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { StyledEngineProvider } from '@mui/material/styles';
import './styles/index.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
