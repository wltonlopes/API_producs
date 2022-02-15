require('dotenv/config');

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

// module.exports = {
//   development: {
//     username: 'root',
//     password: '12345',
//     database: 'producttosale',
//     host: '127.0.0.1',
//     dialect: 'mysql',
//   },
// }
module.exports = {
  development: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
}