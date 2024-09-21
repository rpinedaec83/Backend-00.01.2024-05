const { Order, OrderItem, Product } = require('../models');

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id, {
      include: {
        model: OrderItem,
        include: Product
      }
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
