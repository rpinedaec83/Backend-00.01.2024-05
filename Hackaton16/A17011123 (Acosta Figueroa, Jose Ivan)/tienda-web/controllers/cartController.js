const { User, Cart, CartItem, Product, Order, OrderItem, Payment } = require('../models');

exports.createCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const cart = await Cart.create({ user_id: userId });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addItemToCart = async (req, res) => {
  try {
    const { cartId, productId, quantity } = req.body;
    const cartItem = await CartItem.create({ cart_id: cartId, product_id: productId, quantity });
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.checkout = async (req, res) => {
  try {
    const { cartId, userId } = req.body;

    // Calculate total amount
    const cartItems = await CartItem.findAll({
      where: { cart_id: cartId },
      include: Product
    });

    const totalAmount = cartItems.reduce((total, item) => total + (item.quantity * item.Product.price), 0);

    // Create order
    const order = await Order.create({ user_id: userId, total_amount: totalAmount, status: 'pending', cart_id: cartId });

    // Create order items
    for (const item of cartItems) {
      await OrderItem.create({
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.Product.price
      });
    }

    // Create payment
    await Payment.create({
      order_id: order.id,
      payment_amount: totalAmount,
      payment_method: 'credit_card',
      payment_status: 'paid'
    });

    // Clear cart
    await CartItem.destroy({ where: { cart_id: cartId } });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
