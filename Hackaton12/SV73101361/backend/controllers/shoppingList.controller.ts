import { Request, Response } from 'express';
import db from '../models';
import { ShoppingListAttributes } from '../models/shoppingList.model';

const ShoppingList = db.ShoppingList;

// Crear un nuevo item en la lista
export const create = async (req: Request, res: Response) => {
    try {
        const newItem = await ShoppingList.create(req.body as ShoppingListAttributes);
        res.status(201).json({ message: 'Item added to the list', item: newItem });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ message: 'Error inserting data' });
    }
};

// Obtener todos los items pendientes
export const findAllPending = async (req: Request, res: Response) => {
    try {
        const pendingItems = await ShoppingList.findAll({ where: { EsCompletado: false } });
        res.status(200).json(pendingItems);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
};

// Obtener todos los items completados
export const findAllCompleted = async (req: Request, res: Response) => {
    try {
        const completedItems = await ShoppingList.findAll({ where: { EsCompletado: true } });
        res.status(200).json(completedItems);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data' });
    }
};
