// Update with your config settings.

module.exports = {
  client: 'mssql',
  connection: {
    server : 'jonathanb.database.windows.net',
    options: {
      port: 14831,
      trustedConnection: true,
    },
    database: 'xat_da_uol',
    user: 'db_xat_da_uol',
    password: '@jonathan26062001'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}