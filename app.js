const request = require('request');
const dotenv = require('dotenv');
const yargs = require('yargs');

const encodeAddress = require('./geocode/index').geoCodeAddress;

dotenv.config();

const { argv } = yargs.options({
  address: {
    alias: 'a',
    demand: true,
    describe: 'Address to fetch weather for',
    string: true,
  }
})
  .help()
  .alias('help', 'h');

encodeAddress(argv.address)
