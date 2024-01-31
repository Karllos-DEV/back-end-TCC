const knex = require('knex');

const configuration = require('../knexfile');

const evironment = process.env.NODE_ENV || 'development'


const conn = knex(configuration.development[environment]);

module.exports = conn;