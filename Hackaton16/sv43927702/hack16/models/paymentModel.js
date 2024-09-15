const db = require('../db/connection');

exports.savePayment = async (userId, productId, paymentIntent) => {
    const query = 'INSERT INTO Payments (user_id, product_id, amount, stripe_payment_id, status) VALUES (?, ?, ?, ?, ?)';
    await db.query(query, [userId, productId, paymentIntent.amount / 100, paymentIntent.id, 'pending']);
};

exports.getPaymentById = async (paymentId) => {
    const query = 'SELECT * FROM Payments WHERE id = ?';
    const result = await db.query(query, [paymentId]);
    return result[0];
};
