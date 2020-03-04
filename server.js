const express = require('express')
const path = require('path')

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

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on port ${port}`) )