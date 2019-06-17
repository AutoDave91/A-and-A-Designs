const express = require('express');
const app = express();
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

// controller imports
const uc = require('./controllers/userController')


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*7
    }}))
massive(CONNECTION_STRING)
    .then(db =>{
        console.log('Database connection successful!')
        app.set('db', db)
    })
    .catch(()=>{console.log('Database connection failed...')})

// endpoints
app.get('/test/', uc.getUser)


app.listen(SERVER_PORT, ()=> {
    console.log(`Listening on port ${SERVER_PORT}.`)
})