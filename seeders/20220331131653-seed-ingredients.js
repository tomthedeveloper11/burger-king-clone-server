'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    let ingredients = [
      {
        name: 'Buns',
      },
      {
        name: 'Flame Grilled Beef',
      },
      {
        name: 'Tomatoes',
      },
      {
        name: 'Bread Toast',
      },
      {
        name: 'Flame Grilled Beef',
      },
      {
        name: 'Cheese',
      },
      {
        name: 'Pickles',
      },
      {
        name: 'Flame Grilled Beef',
      },
      {
        name: 'American Cheese',
      },
      {
        name: 'Chicken Meat',
      },
      {
        name: 'Seasoned Breading',
      },
      {
        name: 'Cheese Sticks',
      },
      {
        name: 'Marinara Dipping Sauce',
      },
      {
        name: 'Potato',
      },
      {
        name: 'Cheese',
      },
      {
        name: 'Capri Sun',
      },
      {
        name: 'Simply Orange Juice',
      },
      {
        name: 'Coca-Cola',
      },
    ]

    ingredients.forEach((ingredient) => {
      ingredient.createdAt = new Date()
      ingredient.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Ingredients', ingredients, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ingredients', null, {})
  },
}
