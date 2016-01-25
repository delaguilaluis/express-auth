const Sequelize = require('sequelize');

module.exports = function initModels() {
  const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,

      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    }
  );

  require('./user')(Sequelize, sequelize);
};
