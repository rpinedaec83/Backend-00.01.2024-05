module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: "pending" },
    stripePaymentId: { type: DataTypes.STRING, allowNull: false } //  para almacenar el ID del pago en Stripe
  });
  return Payment;
};
