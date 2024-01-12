exports.up = function (knex) {
  return knex.schema.createTable('tab_coments', (t) => {
    t.increments()
    t.string('comment').notNull()
    t.integer('user_id').unsigned().notNullable();
    t.foreign('user_id').references('tab_users.id');
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tab_comments')
}