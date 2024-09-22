// src/services/cabinService.ts
import api from './api';
import { Cabin } from '../types/types';

export const getCabins = async (): Promise<Cabin[]> => {
  const response = await api.get('/cabins');
  return response.data;
};

export const createCabin = async (cabinData: Cabin): Promise<Cabin> => {
  const response = await api.post('/cabins', cabinData);
  return response.data;
};

// Agrega funciones para updateCabin y deleteCabin si es necesario
