import { Request, Response } from 'express';
import { OrderService } from '../services/OrderService';

export class OrderController {
    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    async createOrder(req: Request, res: Response): Promise<void> {
        try {
            const order = await this.orderService.createOrder(req.body);
            res.status(201).json(order);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async getOrderById(req: Request, res: Response): Promise<void> {
        try {
            const order = await this.orderService.getOrderById(req.params.id);
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async getAllOrders(req: Request, res: Response): Promise<void> {
        try {
            const orders = await this.orderService.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async updateOrder(req: Request, res: Response): Promise<void> {
        try {
            const order = await this.orderService.updateOrder(req.params.id, req.body);
            if (order) {
                res.status(200).json(order);
            } else {
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }

    async deleteOrder(req: Request, res: Response): Promise<void> {
        try {
            const order = await this.orderService.deleteOrder(req.params.id);
            if (order) {
                res.status(200).json({ message: 'Order deleted successfully' });
            } else {
                res.status(404).json({ message: 'Order not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'An unexpected error occurred' });
            }
        }
    }
}
