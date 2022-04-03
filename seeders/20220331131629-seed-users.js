'use strict'
const { hashPassword } = require('../helpers/bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@admin.com',
          password: hashPassword('12345'),
          role: 'Admin',
          phoneNumber: '0123456789',
          address: 'medan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
