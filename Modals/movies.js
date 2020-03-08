const Sequelize = require('sequelize');
const db = require("../Config/database")

const bmsmovies= db.define('bmsmovies',{
    name : {
        type : Sequelize.STRING
    },
    actors : {
        type : Sequelize.STRING
    },
    description :{
        type : Sequelize.STRING
    },
    poster : {
        type : Sequelize.STRING
    },
    category : {
        type : Sequelize.STRING
    }

})

module.exports = bmsmovies