'use strict';
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: DataTypes.TIMESTAMP
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};