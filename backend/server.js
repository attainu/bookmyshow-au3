const express = require('express')
const path = require('path')
const nodemailer = require("nodemailer");
const app = express();

// Database

const db = require("./Config/database")
var bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({
    extended: false
  }));

// User Routes

app.use('/users',require("./Routes/userRoutes"))

app.use("/movies",require("./Routes/movieRoutes"))

app.use("/theatres",require("./Routes/theatreRoutes"))


// Send Email 

app.get("/sendticket",(req,res) => {
    const data = {
      name : req.body.name,
      tickets : req.body.tickets,
      seats : req.body.seats
    }

    const output = `
      Hi ${data.name}, Here is your ticket

      No of Tickets Booked ${data.ticket}
      Seats : ${data.seats}

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
        to: "balajikamalesan96@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: output, // plain text body
        html: "<b>Hello world?</b>" // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   
    }
    
    main().then(() => {
      res.send("Mail Sent")
    }).catch(console.error);

})

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on port ${port}`) )