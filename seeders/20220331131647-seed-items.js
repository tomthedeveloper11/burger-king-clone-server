'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          name: 'Whopper',
          description:
            'Our Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
          price: '37800',
          imgUrl:
            'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/84743a96a55cb36ef603c512d5b97c9141c40a33-1333x1333.png?w=320&q=40&fit=max&auto=format',
          authorId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Whopper Melt',
          description:
            'The new Whopper Melt from Burger King® features two slices of toast, layered with ¼. lb of flame-grilled beef, melty American cheese, caramelized onions and stacker sauce.',
          price: '32300',
          imgUrl:
            'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/2e4a005566a4442cc3a43a0de33e418aaa8bb2bb-1333x1333.png?w=320&q=40&fit=max&auto=format',
          authorId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Double Cheeseburger',
          description:
            'Make room for our Double Cheeseburger, two signature flame-grilled beef patties topped with a simple layer of melted American cheese, crinkle cut pickles, yellow mustard, and ketchup on a toasted sesame seed bun. *Weight based on pre-cooked patty',
          price: '39500',
          imgUrl:
            'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ec3374f3e3ae162fabaf73a299b4d3042269ed6a-1333x1333.png?w=320&q=40&fit=max&auto=format',
          authorId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '4 Pc Chicken Nuggets',
          description:
            'Made with white meat, our bite-sized Chicken Nuggets are tender and juicy on the inside and crispy on the outside. Coated in a homestyle seasoned breading, they are perfect for dipping in any of our delicious dipping sauces.',
          price: '16750',
          imgUrl:
            'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/be575766437c7a4461c097922b8de91438bdce9d-1333x1333.png?w=320&q=40&fit=max&auto=format',
          authorId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mozzarella Sticks 4 Piece',
          description:
            'Try our delicious Mozzarella cheese sticks. Served with marinara dipping sauce, Mozzarella sticks are always a great snack',
          price: '14900',
          imgUrl:
            'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ee7f1bd6fe6ea57b4e5d03812c9cb027394197da-1333x1333.png?w=320&q=40&fit=max&auto=format',
          authorId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '8 Pc Cheesy Tots',
          description:
            'Melted cheesy potato bites covered in a crunchy bread crumb coating. Served hot and crispy with your order.',
          price: '20700',
          imgUrl:
            'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/e5a07240a935277708ea7ee2b3c4faa1bee48764-1333x1333.png?w=320&q=40&fit=max&auto=format',
          authorId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Capri Sun Apple Juice',
          description:
            '100% real apple juice from concentrate with added ingredients. All natural beverage containing no preservatives.',
          price: '12300',
          imgUrl:
            'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/032dca3afad74d1cc815df3a5b379ff035c3c4ec-1333x1333.png?w=750&q=40&fit=max&auto=format',
          authorId: 1,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Simply Orange Juice',
          description:
            "A delicious orange juice with a taste that's the next best thing to fresh-squeezed. Try our premium, not-from-concentrate orange juice.",
          price: '15200',
          imgUrl:
            'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ec5c915aa470f4b7b846bcc31acff88f19bc6a18-1333x1333.png?w=750&q=40&fit=max&auto=format',
          authorId: 1,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Coca-Cola',
          description: 'Best coke ever',
          price: '11200',
          imgUrl:
            'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/c50b5e30f0afae6cea9ccdd8eeea069bed721ee9-1333x1333.png?w=750&q=40&fit=max&auto=format',
          authorId: 1,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {})
  },
}
