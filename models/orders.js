module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define("orders", {
    status: {
      type: DataTypes.ENUM(
        "placed",
        "processing",
        "shipped",
        "delivered",
        "post-poned",
        "cancelled"
      ),
      defaultValue: "placed",
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return orders;
};
