const dotenv = require('dotenv');
const args = require('minimist')(process.argv.slice(2));
const path = require('path');
const env = args.env || 'local';
const router = require('./system/router');


dotenv.config({
  path: path.join(__dirname, '.delivery', 'applications', 'api', env, '.env')
})

