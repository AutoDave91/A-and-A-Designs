const express = require('express');
const app = express();
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

// controller imports
const uc = require('./controllers/userController')
const ac = require('./controllers/authController')
const pc = require('./controllers/productController')


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
app.get('/auth/logout', ac.logout)
app.post('/auth/register', ac.register)
app.post('/auth/login', ac.login)
// app.get('/auth/user', ac.getUser)

app.get('/api/inventory', pc.getAll)
app.get('/api/alexis', pc.getAlexis)
app.get('/api/april', pc.getApril)
app.post('/api/add/step1', pc.wizard1)
app.post('/api/add/step2', pc.wizard2)
app.post('/api/add/step3', pc.addProduct)
// app.post('/api/cart/:item', pc.addCart)
// app.delete('/api/cart/:id', pc.removeCart)

app.listen(SERVER_PORT, ()=> {
    console.log(`Listening on port ${SERVER_PORT}.`)
})