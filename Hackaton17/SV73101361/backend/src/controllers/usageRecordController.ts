import { Request, Response } from 'express';
import UsageRecord from '../models/UsageRecord';
import Cabin from '../models/Cabin';
import { Op } from 'sequelize';

export const startUsage = async (req: Request, res: Response) => {
  try {
    const { cabinId } = req.body;
    const cabin = await Cabin.findByPk(cabinId);
    if (!cabin) {
      return res.status(404).json({ message: 'Cabin not found' });
    }

    // Verificar si la cabina ya está en uso
    if (cabin.status === 'in_use') {
      return res.status(400).json({ message: 'Cabin is already in use' });
    }

    // Crear registro de uso
    const usageRecord = await UsageRecord.create({ cabinId });
    // Actualizar estado de la cabina
    await cabin.update({ status: 'in_use' });

    res.status(201).json(usageRecord);
  } catch (error) {
    res.status(500).json({ message: 'Error starting usage', error });
  }
};

export const endUsage = async (req: Request, res: Response) => {
  try {
    const usageRecord = await UsageRecord.findByPk(req.params.id);
    if (!usageRecord) {
      return res.status(404).json({ message: 'Usage record not found' });
    }

    if (usageRecord.endTime) {
      return res.status(400).json({ message: 'Usage has already ended' });
    }

    const cabin = await Cabin.findByPk(usageRecord.cabinId);

    const endTime = new Date();
    const durationInHours = (endTime.getTime() - usageRecord.startTime.getTime()) / 3600000;

    let totalAmount = 0;

    if (cabin) {
      totalAmount = durationInHours * Number(cabin.rate);
      await cabin.update({ status: 'standby' });
    }

    await usageRecord.update({ endTime, totalAmount });

    res.json(usageRecord);
  } catch (error) {
    res.status(500).json({ message: 'Error ending usage', error });
  }
};

export const getUsageRecords = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    let whereClause = {};

    if (startDate && endDate) {
      whereClause = {
        startTime: {
          [Op.between]: [new Date(startDate as string), new Date(endDate as string)],
        },
      };
    }

    const usageRecords = await UsageRecord.findAll({
      where: whereClause,
      include: [Cabin],
    });

    res.json(usageRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching usage records', error });
  }
};
