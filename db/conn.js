const knex = require('knex');

const configuration = require('../knexfile');

const environment = process.env.NODE_ENV || 'development'


const conn = knex(configuration[environment]);

module.exports = conn;