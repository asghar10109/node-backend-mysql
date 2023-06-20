const Sequelize = require('sequelize');

const User = (sequelize) => {
  return sequelize.define('User', {
    name: {
      type: Sequelize.STRING,
      required: true
    },
    email: {
      type: Sequelize.STRING,
      required: true
    },
    password: {
      type: Sequelize.STRING,
      required: true
    },
    address: {
      type: Sequelize.STRING,
      required: true,
    },
    avator: {
      type: Sequelize.STRING,  
    },
    phone: {
      type: Sequelize.INTEGER,
      required: true,  
    },
    role: {
      type: Sequelize.STRING,
      defaultValue: 'user',
      required: true,
    }
  });
};

module.exports = User;