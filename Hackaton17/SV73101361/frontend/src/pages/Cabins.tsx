// src/pages/Cabins.tsx
import React, { useEffect, useState } from 'react';
import { Cabin } from '../types/types';
import { getCabins } from '../services/cabinService';
import CabinCard from '../components/CabinCard';
import { startUsage, endUsage } from '../services/usageRecordService';
import { Typography } from '@mui/material';

const Cabins: React.FC = () => {
  const [cabins, setCabins] = useState<Cabin[]>([]);

  useEffect(() => {
    fetchCabins();
  }, []);

  const fetchCabins = async () => {
    try {
      const data = await getCabins();
      setCabins(data);
    } catch (error) {
      console.error('Error fetching cabins:', error);
    }
  };

  const handleStart = async (cabinId: number) => {
    try {
      await startUsage(cabinId);
      fetchCabins();
    } catch (error) {
      console.error('Error starting usage:', error);
    }
  };

  const handleStop = async (cabinId: number) => {
    try {
      await endUsage(cabinId);
      fetchCabins();
    } catch (error) {
      console.error('Error ending usage:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cabinas
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cabins.map((cabin) => (
          <CabinCard
            key={cabin.id}
            cabin={cabin}
            onStart={() => handleStart(cabin.id)}
            onStop={() => handleStop(cabin.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cabins;
