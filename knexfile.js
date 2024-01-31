// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'bd_wiki',
      user: 'root',
      password: ''
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: 'dpg-cmsp138cmk4c738h3ckg-a.oregon-postgres.render.com',
      port: '5432',
      user: 'k2l_web',
      password: 'KLAupbjkpLG4BA3Fj7xMqUXEPIMYMmzJ',
      database: 'bd_wiki',
      ssl:'true',
    },
  },

};
