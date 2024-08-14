module.exports = {
  //this gets created lama b3ml sequelise init
  //replace this with your own db credentials
  development: {
    username: 'dev',
    password: 'development',
    database: 'KNB',
    host: '192.168.1.31',
    dialect: 'postgresql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
