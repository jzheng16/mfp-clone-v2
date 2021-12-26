const Sequelize = require('sequelize');
const db = require('../');

const Plan = db.define('plan', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  calorieFactor: {
    type: Sequelize.INTEGER
  },
  proteinFactor: {
    type: Sequelize.FLOAT
  },
  fatFactor: {
    type: Sequelize.FLOAT
  },
});

module.exports = Plan;
