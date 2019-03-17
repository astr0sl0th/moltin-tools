const Moltin = require('../../client/moltin-client');

const createProduct = async products => {
  products.forEach(async product => {
    try {
      const createdProduct = await Moltin().post('products', {
        type: 'product',
        name: process.name,
        slug: product.slug,
        sku: product.sku,
        description: product.description,
        manage_stock: false,
        price: [
          {
            amount: product.price,
            currency: 'GBP',
            includes_tax: true
          }
        ],
        status: 'live',
        commodity_type: 'physical'
      });
      console.log(`New product created: ${createdProduct}`);
    } catch (error) {
      console.error(error);
    }
  });
};

module.exports = createProduct;
