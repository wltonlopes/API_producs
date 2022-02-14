module.exports = {
  up: (queryInterface, _Sequelize) => queryInterface.bulkInsert('Products', [{
      name: 'faca',
      quant: '10',
      value: '25.50',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'garfo',
      quant: '25',
      value: '10.00',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'colher',
      quant: '22',
      value: '15.50',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]),
  down: (queryInterface, _Sequelize) => queryInterface.bulkDelete('Products', null, {}),
};