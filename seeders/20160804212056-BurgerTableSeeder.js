'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burger', [{
      burger_name: 'Something',
      devoured: true
    }, {
      burger_name: 'Burger 2',
      devoured: false
    }], {});
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('burger', null, {truncate:true});
  }
};
