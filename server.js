import connectdb from './db/connectdb.js';
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

const expressLayout=require('express-ejs-layouts')
const PORT =process.env.PORT || 3300 ;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

connectdb(DATABASE_URL);




app.use(express.static('public'));


app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');
require('./routes/web')(app);

//set Tempelate Engine



app.listen(PORT,()=>{
    console.log(`listen on Port ${PORT}`)
});
