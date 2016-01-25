module.exports = function initUser(Sequelize, sequelize) {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.STRING,
      field: 'id',
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name',
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name',
    },
    email: {
      type: Sequelize.STRING,
      field: 'email',
    },
    password: {
      type: Sequelize.STRING,
      field: 'password',
    },
  }, {
    freezeTableName: true, // Model tableName will be the same as the model name
  });

  User.sync();
};
