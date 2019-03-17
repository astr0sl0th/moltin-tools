const createProduct = require('./createProduct');
const products = [
  {
    type: 'product',
    name: 'Deck Shoe',
    slug: 'deck-shoe',
    sku: 'deck-shoe-001',
    description:
      "Modern boat shoes were invented in 1935 by American Paul A. Sperry of New Haven, Connecticut after noticing his dog's ability to run easily over ice without slipping. Using a knife, he cut siping into his shoes' soles, inspiring a shoe perfect for boating and a company called Sperry Top-Sider.",
    manage_stock: false,
    price: [
      {
        amount: 2400,
        currency: 'GBP',
        includes_tax: true
      }
    ],
    status: 'live',
    commodity_type: 'physical'
  }
];

test('it should create a new product', () => {
  return createProduct(products).resolves();
});
