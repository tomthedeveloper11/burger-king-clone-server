'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Flame Grilled Burgers',
          imgUrl: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/1779250930939d73cef4805edbc2d54c1ce8789e-1000x745.png?w=320&q=40&fit=max&auto=format',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sides',
          imgUrl: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/d28943717d45a54a4affa0a3544d35bc25d9e648-1000x745.png?w=320&q=40&fit=max&auto=format',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Beverages',
          imgUrl: 'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/c50b5e30f0afae6cea9ccdd8eeea069bed721ee9-1333x1333.png?w=320&q=40&fit=max&auto=format',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  },
}
