const argv = require('yargs').argv;
let converter = require('json-2-csv');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const readFile = promisify(fs.readFile);

const products = async () => {
  try {
    const products = await readFile(path.resolve(argv.f), {
      encoding: 'utf8'
    });
    return converter.csv2jsonAsync(products);
  } catch (error) {
    console.error(error);
  }
};

module.exports = products;
