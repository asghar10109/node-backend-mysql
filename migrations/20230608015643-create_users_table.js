'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        
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
        
      },
      createdAt: {
        type: Sequelize.DATE,
       
      },
      updatedAt: {
        type: Sequelize.DATE,
        
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
