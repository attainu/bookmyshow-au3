const Sequelize = require('sequelize');
const db = require("../Config/database")

const bmstheatres = db.define('bmstheatres',{
    name : {
        type : Sequelize.STRING
    },
    location:{
        type : Sequelize.STRING
    },
    seats : {
        type : Sequelize.INTEGER
    },
    movie : {
        type : Sequelize.STRING
    }
})

module.exports = bmstheatres