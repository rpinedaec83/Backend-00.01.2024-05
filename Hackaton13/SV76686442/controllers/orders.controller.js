const OrderModel = require('../models/order.model');
const CouponModel = require('../models/coupon.model');
const CourseModel = require('../models/course.model');
const Variables= require('../common/config/env.config');
const ADMIN=Variables.permissionLevels.ADMIN;
// Simulación de pago
const simulatePayment = (amount) => {
    console.log(`Simulating payment of $${amount}`);

    // Lógica para simular diferentes resultados de pago
    const paymentSuccessful = Math.random() > 0.2; // 80% de éxito, 20% de fallo

    if (paymentSuccessful) {
        console.log('Payment successful!');
        return true; // Simulación exitosa
    } else {
        console.log('Payment failed.');
        return false; // Simulación fallida
    }
};

// Procesar pago de una orden
exports.processOrderPayment = (req, res) => {
    const orderId = req.params.orderId;

    // Buscar la orden
    OrderModel.findOrderById(orderId)
        .then((order) => {
            if (!order) {
                return res.status(404).send({ message: 'Order not found' });
            }

            if (order.paymentStatus==='completed') {
                return res.status(404).send({ message: 'La orden ya se pagó' });
            }

            let userId = req.jwt.userId;
            if (order.userId !== userId) {
                // Simular el pago
                const paymentResult = simulatePayment(order.amount); // Asumiendo que 'amount' es una propiedad de la orden

                // Actualizar el estado de pago según el resultado de la simulación
                const updatedPaymentStatus = paymentResult ? 'completed' : 'failed';

                return OrderModel.updateOrderById(orderId, { paymentStatus: updatedPaymentStatus });
            } else {
                return res.status(400).send({message: 'La orden no se encontró'});
            }

        })
        .then(() => {
            res.status(200).send({ message: 'Payment processed successfully' });
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.createOrder = async (req, res) => {
    try {
        // Verificar si se aplica un cupón
        let discount = 0;
        if (req.body.appliedCoupon) {
            let coupon = await CouponModel.findOne({ code: req.body.appliedCoupon });
            if (coupon) {
                // Verificar si el cupón está expirado
                if (new Date() > coupon.expirationDate) {
                    return res.status(400).send({ message: "Coupon has expired" });
                }
                // Aplicar el descuento
                discount = coupon.discount;
            }
        }

        let course = await CourseModel.findById(req.body.courseId);
        if (!course) {
            return res.status(404).send({ message: "Course not found" });
        }

        // Calcular el monto total con descuento
        let totalAmount = course.value * (1 - (discount / 100));

        // Crear la orden
        OrderModel.createOrder({
            ...req.body,
            totalAmount: totalAmount,
            paymentStatus: 'pending'
        }).then((result) => {
            res.status(201).send({ id: result._id });
        })
            .catch(err => res.status(500).send({ message: err.message }));
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.listOrders = (req, res) => {
    let userId = req.jwt.userId;
    let level = req.jwt.permissionLevel;
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = req.query.page && Number.isInteger(parseInt(req.query.page)) ? parseInt(req.query.page) : 0;
   if(level & ADMIN){
    OrderModel.listOrders(limit, page)
        .then((orders) => {
            res.status(200).send(orders);
        })
        .catch((error) => {
            res.status(500).send({ message: error.message });
        });
   }
   OrderModel.listOrdersUserId(limit, page, userId)
   .then((orders) => {
       res.status(200).send(orders);
   })
   .catch((error) => {
       res.status(500).send({ message: error.message });
   });
   
};

exports.getOrderById = (req, res) => {
    let userId = req.jwt.userId;
    let level = req.jwt.permissionLevel;
    const orderId = req.params.orderId;
    OrderModel.findOrderById(orderId)
        .then((order) => {
            
            if (order) {
                if(level & ADMIN || userId!==order.userId){
                    res.status(200).send(order);
                }else{
                    res.status(403).send({ message: "Orden no encontrada" });
                }
                
            } else {
                res.status(404).send({ message: "Order not found" });
            }
        })
        .catch((error) => {
            res.status(500).send({ message: error.message });
        });
};

exports.updateOrderById = (req, res) => {
    let userId = req.jwt.userId;
    let level = req.jwt.permissionLevel;
    OrderModel.findOrderById(req.params.orderId)
    .then((order) => {
        
        if (order) {
            
            if(level & ADMIN || (userId!==order.userId && order.paymentStatus != 'completed')){
                OrderModel.updateOrderById(req.params.orderId, req.body)
                .then((order) => {
                    if (order) {
                        res.status(200).send(order);
                    } else {
                        res.status(404).send({ message: "Order not found" });
                    }
                })
                .catch((error) => {
                    res.status(500).send({ message: error.message });
                });
            }else{
                res.status(403).send({ message: "Orden no encontrada o ya pagada" });
            }
            
        } else {
            res.status(404).send({ message: "Order not found" });
        }
    })
    .catch((error) => {
        res.status(500).send({ message: error.message });
    });



};

exports.deleteOrderById = (req, res) => {

        let userId = req.jwt.userId;
        let level = req.jwt.permissionLevel;
        OrderModel.findOrderById(req.params.orderId)
        .then((order) => {
            
            if (order) {
                
                if(level & ADMIN || (userId!==order.userId && order.paymentStatus != 'completed')){
                    OrderModel.deleteOrderById(req.params.orderId)
                    .then(() => {
                        res.status(200).send({message: 'Eliminado correctamente'});
                    })
                    .catch((error) => {
                        res.status(500).send({ message: error.message });
                    });
                }else{
                    res.status(403).send({ message: "Orden no encontrada o ya pagada" });
                }
                
            } else {
                res.status(404).send({ message: "Order not found 2" });
            }
        })
        .catch((error) => {
            res.status(500).send({ message: error.message });
        });
};
