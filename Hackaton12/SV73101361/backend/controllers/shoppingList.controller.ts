// controllers/shoppingList.controller.ts
import { IncomingMessage, ServerResponse } from 'http';
import ShoppingList from '../models/shoppingList.model';

export const getAllItems = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  try {
    const items = await ShoppingList.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(items));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Error al obtener los items de la lista de compras' }));
  }
};

export const getItemById = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  const id = req.params?.id;
  if (!id) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'ID no proporcionado' }));
    return;
  }

  try {
    const item = await ShoppingList.findByPk(id);
    if (item) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Item no encontrado' }));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Error al obtener el item de la lista de compras' }));
  }
};

export const createItem = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const newItem = JSON.parse(body);
      const createdItem = await ShoppingList.create(newItem);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(createdItem));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Error al crear el item en la lista de compras' }));
    }
  });
};

export const updateItem = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  const id = req.params?.id;
  if (!id) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'ID no proporcionado' }));
    return;
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const updatedData = JSON.parse(body);
      const [updated] = await ShoppingList.update(updatedData, {
        where: { id }
      });
      if (updated) {
        const updatedItem = await ShoppingList.findByPk(id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedItem));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Item no encontrado' }));
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Error al actualizar el item en la lista de compras' }));
    }
  });
};

export const deleteItem = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  const id = req.params?.id;
  if (!id) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'ID no proporcionado' }));
    return;
  }

  try {
    const deleted = await ShoppingList.destroy({
      where: { id }
    });
    if (deleted) {
      res.writeHead(204);
      res.end();
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Item no encontrado' }));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Error al eliminar el item de la lista de compras' }));
  }
};
