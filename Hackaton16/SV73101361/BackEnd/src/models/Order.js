const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./User');
const Course = require('./Course');

// Definición del modelo Pedido
const Order = sequelize.define('Order', {
  // ID del pedido (generado automáticamente)
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Estado del pedido (pendiente, completado, cancelado)
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },
  // Total del pedido
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  paymentIntentId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Fecha de creación
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  // Fecha de actualización
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Relaciones

// Un Pedido pertenece a un Usuario
Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });

// Muchos a Muchos: Un Pedido puede tener muchos Cursos y un Curso puede estar en muchos Pedidos
const OrderItem = sequelize.define('OrderItem', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

// Asociaciones para la tabla intermedia OrderItem
Order.belongsToMany(Course, { through: OrderItem, foreignKey: 'orderId' });
Course.belongsToMany(Order, { through: OrderItem, foreignKey: 'courseId' });

module.exports = { Order, OrderItem };
