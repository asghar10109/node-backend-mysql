const Sequelize = require('sequelize');

const reservation = (sequelize) => {
  return sequelize.define('reservation', {
    res_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //ref resturant id 
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive', 'pending'),
        allowNull: false,
        required: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
       
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
  });
};

module.exports = reservation;