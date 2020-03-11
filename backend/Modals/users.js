const Sequelize = require('sequelize');
const db = require("../Config/database")

const bmsusers = db.define('bmsusers',{
    name : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING
    }
})

module.exports = bmsusers