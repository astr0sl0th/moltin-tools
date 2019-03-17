const argv = require('yargs')
  .version()
  .usage('Usage: nodejs-cli-app <command> [options]')
  .option('f', {
    alias: 'file',
    type: 'string',
    nargs: 1,
    demand: true,
    demand:
      'Please supply a .csv file which includes the products you would like to manage.'
  })
  .option('c', {
    alias: 'create',
    description: 'Create new product(s) in moltin.'
  })
  .option('u', {
    alias: 'update',
    description: 'Update product(s) in moltin.'
  })
  .option('d', {
    alias: 'delete',
    description: 'Delete product(s) in moltin.'
  })
  .epilog('Created by Joe Hill').argv;

const {
  createProduct,
  updateProduct,
  deleteProduct
} = require('./methods/index');
const getProducts = require('./client/csv-client');

async () => {
  const products = await getProducts();
  switch (true) {
    case argv.c:
      createProduct(products);
      break;
    case argv.u:
      updateProduct(products);
      break;
    case argv.d:
      deleteProduct(products);
      break;

    default:
      break;
  }
};
