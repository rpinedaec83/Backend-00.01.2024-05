module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.STRING },
    stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
  });
  return Product;
};
