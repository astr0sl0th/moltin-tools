const config = require('config');
const { createClient } = require('@moltin/request')

const Moltin = new createClient({
  client_id: config.get('moltin.client_id'),
  client_secret: config.get('moltin.client_secret')
})

const moltin = () => {
  return Moltin
}

module.exports = moltin;
