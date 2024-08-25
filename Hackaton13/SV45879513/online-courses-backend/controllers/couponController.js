const Coupon = require('../models/Coupon');

exports.getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createCoupon = async (req, res) => {
  const { code, discount, expirationDate } = req.body;

  try {
    const newCoupon = new Coupon({ code, discount, expirationDate });
    const coupon = await newCoupon.save();
    res.json(coupon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
