const knex = require("knex");

// const db = knex({
//   client: 'pg',
//   connection: {
//     host: '127.0.0.1',
//     port: 5432,
//     user: 'postgres',
//     password: 'test',
//     database: 'todos',
//   },
// });

// module.exports = db;

const db = knex({
  client: "pg",
  connection: {
    // connectionString: process.env.DATABASE_URL,
    connectionString:
      "postgresql://postgres.akaxhvlqbwhqyoavoquw:Himansu@9861@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
    ssl: { rejectUnauthorized: false },
    // host: "dpg-cqhhdaiju9rs738l69g0-a.oregon-postgres.render.com",
    host: "aws-0-ap-south-1.pooler.supabase.com",
    port: 5432,
    // user: "profile_store_database",
    user: "postgres.akaxhvlqbwhqyoavoquw",
    // password: "V6YpJ9fuRAimvbTgDZ3JAke22WKKMUGX",
    password: "Himansu@9861",
    // database: "profile_store_s11h"
    database: "postgres",
  },
});

module.exports = db;
