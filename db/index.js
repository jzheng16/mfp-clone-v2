// Connect to your db
const Sequelize = require('sequelize');
require('dotenv').config();

// If you deploy your app to something like heroku, your db url will be available on database_url.
// const db = new Sequelize('postgres://localhost:5432/mfp-clone', {
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    dialect: 'postgres',
    logging: false,
    define: {
      underscored: true,
      freezeTableName: true
    }
  },
);


module.exports = db;

require('./models');

db.didSync = db.sync()
  .then(() => console.log('sync successful'));

