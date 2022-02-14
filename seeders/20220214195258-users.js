module.exports = {
  up: (queryInterface, _Sequelize) => queryInterface.bulkInsert('Users', [{
      fullName: 'John',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Leandro',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'Brené',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]),
  down: (queryInterface, _Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};