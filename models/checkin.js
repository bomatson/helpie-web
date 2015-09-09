'use strict';
module.exports = function(sequelize, DataTypes) {
  var CheckIn = sequelize.define('CheckIn', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    audio: DataTypes.BLOB('long')
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CheckIn;
};
