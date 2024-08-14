module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define("customers", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return customers;
};
