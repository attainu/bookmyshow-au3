const express = require("express");
const app = express();
const router = express.Router();
const db = require('../Config/database');
const theatreModel = require("../Modals/theatre")
const Sequelize = require("sequelize")
const Op = Sequelize.Op;



router.get('/',(req,res) => 
    theatreModel.findAll()
        .then(theatre => {
            console.log(theatre);
            res.sendStatus(200)
            
        })
        .catch(err => console.log(err))

)

router.get("/location",(req,res) => {
    const location = req.body.location.toString().toLowerCase();
    theatreModel.findAll({where : {location : {[Op.eq] : location}}})
        .then(
            theatre => {
                console.log(theatre);
                res.json(theatre)
            }
        )
        .catch(err => {
            console.log(err)
        })
})

router.get("/movie",(req,res) => {
    let movie = req.body.movie.toString();
    movie = movie.toLowerCase()
    theatreModel.findAll({where : {movie : {[Op.eq] : movie}}})
        .then(
            theatre => {
                // console.log(theatre);
                res.json(theatre)
            }
        )
        .catch(err => {
            console.log(err)
        })
})




router.post('/addtheatre',(req,res)=> {
    const data = {
        name : req.body.name,
        movie : req.body.movie.toLowerCase(),
        seats : req.body.seats,
        location : req.body.location.toLowerCase()
    }

 
    console.log(data)
    let {name,location,seats,movie} = data;
    
    // Inserting into db
    theatreModel.create({
        name,
        location,
        seats,
        movie
          
    })
    .then(user => res.redirect('/theatres'))
    .catch(err=> console.log("Err"))

})



module.exports = router;