// src/services/usageRecordService.ts
import api from './api';
import { UsageRecord } from '../types/types';

export const startUsage = async (cabinId: number): Promise<UsageRecord> => {
  const response = await api.post('/usage-records/start', { cabinId });
  return response.data;
};

export const endUsage = async (recordId: number): Promise<UsageRecord> => {
  const response = await api.put(`/usage-records/end/${recordId}`);
  return response.data;
};

// Agrega funciones para getUsageRecords si es necesario
