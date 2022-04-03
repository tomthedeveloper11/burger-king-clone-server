'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    let ingredients = [
      {
        itemId: 1,
        ingredientId: 1,
      },
      {
        itemId: 1,
        ingredientId: 2,
      },
      {
        itemId: 1,
        ingredientId: 3,
      },
      {
        itemId: 2,
        ingredientId: 4,
      },
      {
        itemId: 2,
        ingredientId: 5,
      },
      {
        itemId: 2,
        ingredientId: 6,
      },
      {
        itemId: 3,
        ingredientId: 7,
      },
      {
        itemId: 3,
        ingredientId: 8,
      },
      {
        itemId: 3,
        ingredientId: 9,
      },{
        itemId: 4,
        ingredientId: 10,
      },{
        itemId: 4,
        ingredientId: 11,
      },{
        itemId: 5,
        ingredientId: 12,
      },{
        itemId: 5,
        ingredientId: 13,
      },{
        itemId: 6,
        ingredientId: 14,
      },{
        itemId: 6,
        ingredientId: 15,
      },{
        itemId: 7,
        ingredientId: 16,
      },{
        itemId: 8,
        ingredientId: 17,
      },{
        itemId: 9,
        ingredientId: 18,
      },
    ]

    ingredients.forEach((ingredient) => {
      ingredient.createdAt = new Date()
      ingredient.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('ItemIngredients', ingredients, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ItemIngredients', null, {})
  },
}
