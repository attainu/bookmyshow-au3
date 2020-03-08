const express = require("express");
const router = express.Router();
const db = require('../Config/database');
const nodemailer = require("nodemailer");
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

    let otp = req.body.otp;

    let {name,email} = data;
    
    // Inserting into db
    userModal.create({
        name,
        email
    })
    .then(user =>{
        const output = `
        Hi ${email}, 
        Here is your otp for registration

        Otp : ${otp}
        
    
  
        Thanks for registering with Book my Show, Enjoy your movie
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
          subject: "Book My show Registration OTP", // Subject line
          text: output, // plain text body
          html: `
          <h3>Hi ${email} </h3>, 

          <strong>
          <p>Here is your OTP for registration
         
          <br>
          OTP : ${otp}
          
          <p>
          </strong>
          Thanks for registering with Book my Show, Enjoy your movie
          <p>
          ` // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.send(`You can view the otp here : ${nodemailer.getTestMessageUrl(info)} `)
     
      }
      
      main().then(() => {
        console.log("Mail sent")
        
      }).catch(console.error);
  
    })
    .catch(err=> console.log(err))

})



module.exports = router;