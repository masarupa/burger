'use strict';
module.exports = (sequelize, DataTypes) => {
  const burger = sequelize.define('burger', {
    burger_name: DataTypes.STRING,
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {});
  burger.associate = function(models) {
    // associations can be defined here
  };
  return burger;
};