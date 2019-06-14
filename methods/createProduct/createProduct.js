const chalk = require('chalk')
const Moltin = require('../../client/moltin-client');
const convertToBool = require('../../util/stringToBool')

const createProduct = products => {
  console.log('Creating products....');
  return products.forEach(async product => {
    try {
      const createdProduct = await Moltin().post('products', {
        type: 'product',
        name: product.name,
        slug: product.slug,
        sku: product.sku,
        description: product.description,
        manage_stock: convertToBool(product.manage_stock),
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
      console.log(`New product created: ${chalk.green(createdProduct.data.name)}`);
    } catch (error) {
      console.error(error);
    }
  });
};

module.exports = createProduct;
