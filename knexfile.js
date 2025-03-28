// Update with your config settings.
module.exports = {

  development: {
    client: '',
    connection: {
      host : "adotapets.mysql.dbaas.com.br",
      database: "adotapets",
      user: "adotapets",
      password: "Pets@0669"
    },
    migrations: {
      directory: ''
    },
    useNullAsDefault: true,
  },

  staging: {
    client: '',
    connection: {
      database: '',
      user:     '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: ''
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : "adotapets.mysql.dbaas.com.br",
      database: "adotapets",
      user: "adotapets",
      password: "Pets@0669"
    },
    
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

};