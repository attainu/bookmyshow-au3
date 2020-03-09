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
            console.log("theatres fetched");
            res.send(theatre)
            
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

router.get("/bookticket",(req,res) => {
    let tickets = parseInt(req.body.tickets); let name = req.body.name.toString().toLowerCase();
    let location = req.body.location.toString().toLowerCase(); let email = req.body.email; let movie = req.body.movie
    
    let otp = Math.floor(1000 + Math.random() * 9000);

    theatreModel.update({seats : Sequelize.literal(`seats-${tickets}`) },{where : {name : {[Op.eq] : name}, location : {[Op.eq] : location}}})
        .then(() =>{
            const output = `
            Hi ${name}, 
            Here is your ticket for 
            Theatre Name  : ${name}
            Movie Name : ${movie}
            No of Tickets Booked ${tickets}
            
        
      
            Thanks for using Book my Show, Enjoy your movie
          `
      
          async function main() {
           
          
            // create reusable transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
              host: 'smtp.ethereal.email',
              port: 587,
              auth: {
                  user: 'oswald.leffler@ethereal.email',
                  pass: '5mdCuYdTWC5N86d2CY'
              },
              tls : {
                rejectUnauthorized : false
              }
          });
          
            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: '"Sample Ticker" <oswald.leffler@ethereal.email>', // sender address
              to: email, // list of receivers
              subject: "Book My show Ticket", // Subject line
              text: output, // plain text body
              html: `
              <h3>Hi ${email} </h3>, 
              <strong>
              <p>Here is your ticket for 
              <br>
              Theatre Name  : ${name}
              <br>
              Movie Name : ${movie}
              <br>
              No of Tickets Booked : ${tickets}
              
              <p>
              </strong>
              Thanks for using Book my Show, Enjoy your movie
              <p>
              ` // html body
            });
          
            console.log("Message sent: %s", info.messageId);
            
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            res.send(`You can view the ticket here : ${nodemailer.getTestMessageUrl(info)} `)
         
          }
          
          main().then(() => {
            console.log("Mail sent")
          }).catch(console.error);
      
        })
        

})

module.exports = router;