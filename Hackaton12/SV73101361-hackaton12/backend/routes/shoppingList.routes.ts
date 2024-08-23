import { IncomingMessage, ServerResponse } from "http";
import {
  getItemById,
  getAllItems,
  updateItem,
  deleteItem,
  createItem,
} from "../controllers/shoppingList.controller";

export const routes = (req: IncomingMessage, res: ServerResponse): void => {
  const url = new URL(req.url || "", `http://${req.headers.host}`);
  const path = url.pathname;
  const method = req.method;

  if (path === "/items" && method === "GET") {
    getAllItems(req, res);
  } else if (path.match(/^\/items\/\d+$/) && method === "GET") {
    const id = path.split("/")[2];
    req.params = { id };
    getItemById(req, res);
  } else if (path == "/items" && method === "POST") {
    createItem(req, res);
  } else if (path.match(/^\/items\/\d+$/) && method === "PUT") {
    const id = path.split("/")[2];
    req.params = { id };
    updateItem(req, res);
  } else if (path.match(/^\/items\/\d+$/) && method === "DELETE") {
    const id = path.split("/")[2];
    req.params = { id };
    deleteItem(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Ruta no encontrada" }));
  }
};

declare module 'http'{
    interface IncomingMessage {
        params?: {[key: string]: string};
    }
}