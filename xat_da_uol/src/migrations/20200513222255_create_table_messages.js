exports.up = function (knex) {
    return knex.schema.createTable('messages', table =>{
        table.increments('id').primary()
        table.string('content', 255).notNullable()
        table.integer('from_user').references('id').inTable('users')
        table.integer('to_user').references('id').inTable('users')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('messages')
};