const Moltin = require('../client/moltin-client');
const getProducts = require('../client/csv-client');

const deleteProduct = async () => {
  try {
    const products = await getProducts();
    products.forEach(async product => {
      try {
        await Moltin().delete('products', {
          id: product.id
        });
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteProduct;
