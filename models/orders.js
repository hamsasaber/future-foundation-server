module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    status: {
      type: DataTypes.ENUM('placed', 'processing', 'shipped', 'delivered', 'postponed', 'cancelled'),
      defaultValue: 'placed',
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
  orders.associate = (models) => {
    orders.belongsTo(models.customers);
    orders.belongsTo(models.products);
  };
  return orders;
};
