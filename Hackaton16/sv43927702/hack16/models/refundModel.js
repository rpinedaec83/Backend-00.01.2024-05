const db = require('../db/connection');

// Guardar una devolución en la base de datos
exports.saveRefund = async (paymentId, amount, stripeRefundId, status) => {
    try {
        const query = `
            INSERT INTO Refunds (payment_id, amount, stripe_refund_id, status, created_at) 
            VALUES (?, ?, ?, ?, NOW())
        `;
        await db.query(query, [paymentId, amount, stripeRefundId, status]);
    } catch (error) {
        throw error;
    }
};

// Obtener una devolución por el ID del pago
exports.getRefundByPaymentId = async (paymentId) => {
    try {
        const query = 'SELECT * FROM Refunds WHERE payment_id = ?';
        const [refund] = await db.query(query, [paymentId]);
        return refund.length ? refund[0] : null;
    } catch (error) {
        throw error;
    }
};

// Obtener todas las devoluciones de un cliente por su ID
exports.getRefundsByCustomerId = async (customerId)
