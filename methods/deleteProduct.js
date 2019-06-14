const Moltin = require('../client/moltin-client');

const deleteProduct = async products => {
  products.forEach(async product => {
    try {
      await Moltin().delete('products', {
        id: product.id
      });
    } catch (error) {
      console.error(error);
    }
  });
};

module.exports = deleteProduct;
