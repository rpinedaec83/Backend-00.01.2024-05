import { OrderRepository } from '../repositories/OrderRepository';
import { IOrder } from '../models/Order';
import { CouponRepository } from '../repositories/CouponRepository';
import { CourseRepository } from '../repositories/CourseRepository';

export class OrderService {
    private orderRepository: OrderRepository;
    private couponRepository: CouponRepository;
    private courseRepository: CourseRepository;

    constructor() {
        this.orderRepository = new OrderRepository();
        this.couponRepository = new CouponRepository();
        this.courseRepository = new CourseRepository();
    }

    async createOrder(orderData: Partial<IOrder>): Promise<IOrder> {
        let totalAmount = 0;

        if (Array.isArray(orderData.courses)) {
            for (const courseId of orderData.courses) {
                // Verificar que courseId es un string
                if (typeof courseId === 'string') {
                    const course = await this.courseRepository.findById(courseId);
                    if (course) {
                        totalAmount += course.price;
                    }
                } else {
                    throw new Error('Invalid course ID type. Expected string.');
                }
            }
        } else {
            throw new Error('Courses are required to create an order and must be an array of strings.');
        }

        if (typeof orderData.coupon === 'string') {
            const coupon = await this.couponRepository.findById(orderData.coupon);
            if (coupon) {
                const discount = (totalAmount * coupon.discountPercentage) / 100;
                totalAmount -= discount;
            }
        }

        orderData.totalAmount = totalAmount;

        if (!orderData.user || !orderData.status) {
            throw new Error('User and status are required to create an order');
        }

        return await this.orderRepository.create(orderData as IOrder);
    }

    async getOrderById(id: string): Promise<IOrder | null> {
        return await this.orderRepository.findById(id);
    }

    async getAllOrders(): Promise<IOrder[]> {
        return await this.orderRepository.findAll();
    }

    async updateOrder(id: string, updateData: Partial<IOrder>): Promise<IOrder | null> {
        return await this.orderRepository.update(id, updateData);
    }

    async deleteOrder(id: string): Promise<IOrder | null> {
        return await this.orderRepository.delete(id);
    }
}
