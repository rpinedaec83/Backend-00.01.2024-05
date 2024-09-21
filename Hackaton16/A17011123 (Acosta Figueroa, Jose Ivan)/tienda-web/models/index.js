const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modelos
db.Product = require("./product.model")(sequelize, Sequelize);
db.Cart = require("./cart.model")(sequelize, Sequelize);
db.Order = require("./order.model")(sequelize, Sequelize);
db.OrderItem = require("./orderItem.model")(sequelize, Sequelize);
db.User = require("./user.model")(sequelize, Sequelize);
db.Payment = require("./payment.model")(sequelize, Sequelize);

// Relaciones
db.User.hasMany(db.Cart, { as: "carts", foreignKey: "userId" });
db.Cart.belongsTo(db.User, { foreignKey: "userId", as: "user" });

db.User.hasMany(db.Payment, { as: "payments", foreignKey: "userId" });
db.Payment.belongsTo(db.User, { foreignKey: "userId", as: "user" });

db.Cart.belongsToMany(db.Product, { through: "cart_items", as: "products", foreignKey: "cartId" });
db.Product.belongsToMany(db.Cart, { through: "cart_items", as: "carts", foreignKey: "productId" });

db.Order.belongsTo(db.User, { as: "user", foreignKey: "userId" });
db.Order.belongsToMany(db.Product, { through: "order_items", as: "products", foreignKey: "orderId" });

db.OrderItem.belongsTo(db.Order, { foreignKey: "orderId", as: "order" });
db.Order.belongsToMany(db.Product, { through: db.OrderItem, foreignKey: "orderId" });

db.Product.hasMany(db.OrderItem, { as: "orderItems", foreignKey: "productId" });
db.OrderItem.belongsTo(db.Product, { foreignKey: "productId", as: "product" });

module.exports = db;
