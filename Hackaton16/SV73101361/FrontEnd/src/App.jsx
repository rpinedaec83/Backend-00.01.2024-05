import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importación de páginas
import HomePage from './pages/HomePage';
import LoginPages from './pages/LoginPages';
import Dashboard from './pages/Dashboard';
import OAuthCallback from './pages/OAuthCallBack';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Importación del componente PrivateRoute
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  return (
    <Routes>
      {/* Ruta de inicio */}
      <Route path="/" element={<HomePage />} />

      {/* Ruta de inicio de sesión */}
      <Route path="/login" element={<LoginPages />} />

      {/* Ruta para manejar el callback de OAuth */}
      <Route path="/oauth/callback" element={<OAuthCallback />} />

      {/* Ruta protegida del Dashboard */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* Ruta para manejar rutas no encontradas */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
