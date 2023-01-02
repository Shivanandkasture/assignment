// const mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const route = require('../src/routes/route');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);


app.listen( 5000, function () {
    console.log('Express app running on port ' + (5000))
});
