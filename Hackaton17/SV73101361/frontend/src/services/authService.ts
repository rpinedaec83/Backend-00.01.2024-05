// src/services/authService.ts
import api from './api';

export const login = async (email: string, password: string): Promise<string> => {
  const response = await api.post('/auth/login', { email, password });
  const { token } = response.data;
  return token;
};

export const register = async (name: string, email: string, password: string): Promise<string> => {
  const response = await api.post('/auth/register', { name, email, password });
  const { token } = response.data;
  return token;
};