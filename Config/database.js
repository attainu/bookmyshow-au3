
const {Sequelize }= require('sequelize');


module.exports = new Sequelize('postgres://bruxnhnw:1Z5dSYD2b-PvFKpqlZIDhLi2OnwiIINi@rogue.db.elephantsql.com:5432/bruxnhnw')

// module.exports = new Sequelize('postgres', 'postgres', '123456', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });