const CouponModel = require('../models/coupon.model');

exports.createCoupon = (req, res) => {
    CouponModel.createCoupon(req.body)
        .then((result) => {
            res.status(201).send({ id: result._id });
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.listCoupons = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = req.query.page && Number.isInteger(parseInt(req.query.page)) ? parseInt(req.query.page) : 0;
    CouponModel.listCoupons(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.getCouponById = (req, res) => {
    CouponModel.findCouponById(req.params.couponId)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.updateCouponById = (req, res) => {
    CouponModel.updateCouponById(req.params.couponId, req.body)
        .then(() => {
            res.status(204).send({});
        })
        .catch(err => res.status(500).send({ message: err.message }));
};

exports.deleteCouponById = (req, res) => {
    CouponModel.deleteCouponById(req.params.couponId)
        .then(() => {
            res.status(204).send({});
        })
        .catch(err => res.status(500).send({ message: err.message }));
};
