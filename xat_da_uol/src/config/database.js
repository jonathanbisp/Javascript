const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

knex.table('users').insert({name: "jonathan", email: "email", password: "password"})
.then(value => console.log(value));