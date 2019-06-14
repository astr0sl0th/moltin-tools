const Moltin = require('../client/moltin-client');

const updateProduct = async products => {
  for (let product in products) {
    try {
        const updatedProduct = await Moltin().put('products', {
            id: product.id

        })
        console.log(`Product updated: ${updatedProduct.data.name}`)
    } catch (error) {
        console.error(error)
    }
  }
};

module.exports = updateProduct;
