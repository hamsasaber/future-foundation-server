//common format 3shan a-create a table

//module.export bt3ml export le haga mn el js file da
module.exports = (sequelize, DataTypes) => {
  //requests is a object initialised as a table from sequelise (sequelize.define is the constructor)
  const requests = sequelize.define("requests", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inquiry: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: { type: DataTypes.STRING, allowNull: true },
  });
  return requests;
};
