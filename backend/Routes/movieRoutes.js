const express = require("express");
const app = express();
const router = express.Router();
const db = require('../Config/database');
const movieModel = require("../Modals/movies")
const Sequelize = require("sequelize")
const Op = Sequelize.Op;



router.get('/',(req,res) => 
    movieModel.findAll()
        .then(movies => {
            console.log("data fecthed");
            res.send(movies)
            
        })
        .catch(err => console.log(err))

)

router.get("/getMovies/:name",(req,res) => {
    const name = req.params.name;
    console.log(name);
    movieModel.findOne({where : {name : {[Op.eq] : name}}})
        .then(
            movie => {
                console.log(movie);
                res.json(movie)
            }
        )
        .catch(err => {
            console.log(err)
        })
})

router.post('/addmovie',(req,res)=> {
    const data = {
        name : req.body.name,
        actors : req.body.actors,
        description : req.body.description,
        poster : req.body.poster,
        category : req.body.category
    }

 

    let {name,actors,description,poster,category} = data;
    
    // Inserting into db
    movieModel.create({
        name,
        actors,
        description,
        poster,
        category

    })
    .then(user => res.redirect('/movies'))
    .catch(err=> console.log("Err"))

})



module.exports = router;