
const Sequelize = require('sequelize');

module.exports = new Sequelize('postgres', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres'
  });