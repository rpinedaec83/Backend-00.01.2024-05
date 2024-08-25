const Joi = require('joi');

// Define validation schemas
const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional()
});

const courseSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    img: Joi.string().optional(),
    cover: Joi.string().optional(),
    value: Joi.number().required()
});

const orderSchema = Joi.object({
    userId: Joi.string().required(),
    courseId: Joi.string().required(),
    paymentStatus: Joi.string().valid('pending', 'completed', 'failed').default('pending')
});

const couponSchema = Joi.object({
    code: Joi.string().required(),
    discount: Joi.number().required()
});

// Middleware for validating request body
exports.validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }
    next();
};

exports.validateCourse = (req, res, next) => {
    const { error } = courseSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }
    next();
};

exports.validateOrder = (req, res, next) => {
    const { error } = orderSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }
    next();
};

exports.validateCoupon = (req, res, next) => {
    const { error } = couponSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ error: error.details[0].message });
    }
    next();
};
