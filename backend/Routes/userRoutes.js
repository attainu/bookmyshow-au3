const express = require("express");
const router = express.Router();
const db = require('../Config/database');
const userModal = require("../Modals/users")
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

router.get('/',(req,res) => 
    userModal.findAll()
        .then(bmsusers => {
            console.log(bmsusers);
            res.sendStatus(200)
            
        })
        .catch(err => console.log(err))

)

router.post("/getuser",(req,res)=> {
    
    const email = req.body.email.toString()
    userModal.findAll({where : {email : {[Op.eq] : email}}})
        .then(user => {
            console.log(user)
            res.json(user)
        } )
        .catch(err => console.log(err))
}
        
)

router.post('/adduser',(req,res)=> {
    const data = {
        name : req.body.name,
        email : req.body.email
    }

    let {name,email} = data;
    
    // Inserting into db
    userModal.create({
        name,
        email
    })
    .then(user => res.redirect('/users'))
    .catch(err=> console.log("Err"))

})



module.exports = router;