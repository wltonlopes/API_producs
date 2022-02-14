const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    quant: DataTypes.STRING,
    value: DataTypes.STRING,
  });

  return Product;
};

module.exports = Product;