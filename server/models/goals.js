var User = require('./user');
const Sequelize = require('sequelize');
const dbUrl = 'postgres://apgubbip:e0G61f0aOteJCUOqGBK7H6glT7mHQp5N@elmer.db.elephantsql.com:5432/apgubbip'
const sequelize = new Sequelize(dbUrl);

const Goals = sequelize.define('goal', {
  budget: {
    type: Sequelize.STRING
  },
  goal: {
    type: Sequelize.STRING
  },
  goaldate: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  }
});

sequelize.sync()

module.exports = Goals;