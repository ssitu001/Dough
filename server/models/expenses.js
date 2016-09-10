var User = require('./user');
const Sequelize = require('sequelize');
const dbUrl = 'postgres://zqfgesav:s317KdarS_J7BqbMhGuuxtUxEJyRNcmN@elmer.db.elephantsql.com:5432/zqfgesav'
const sequelize = new Sequelize(dbUrl);

const Expenses = sequelize.define('expenses', {
  title: {
    type: Sequelize.STRING
  },
  category: {
   type: Sequelize.STRING
  },
  amount: {
   type: Sequelize.STRING
  },
  date: {
   type: Sequelize.STRING
  },
  recurring: {
   type: Sequelize.BOOLEAN
  },
  user_id: {
    type: Sequelize.STRING
  }
  });

  Expenses.sync({force: true}).then(function () {
   // Table created
   return Expenses.create({
     title: 'Bought some meats',
     category: 'Food',
     amount: '100',
     date: '1/28/2016',
     recurring: false,
     user_id: '1'
   });
  });


module.exports = Expenses;
