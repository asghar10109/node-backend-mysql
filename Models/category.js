const Sequelize = require('sequelize');

const Category = (sequelize) => {
  return sequelize.define('Category', {
    
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true
    },
    parent_category: {
      type: Sequelize.STRING,
      allowNull: false,
      required: true,
      unique: true
    }
    
  });
};

module.exports = Category;