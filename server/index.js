const express = require('express');
const app = express();
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

// controller imports
const uc = require('./controllers/userController');
const ac = require('./controllers/authController');
const pc = require('./controllers/productController');
const dc = require('./controllers/designerController');
const auth = require('./middleware/auth.Middleware');


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

// ---------------------endpoints---------------------
// --authController--
app.get('/test/', uc.getUser)
app.get('/auth/logout', ac.logout)
app.post('/auth/register', ac.register)
app.post('/auth/login', ac.login)
app.get('/auth/user', ac.getUser)

// --productController--
app.get('/api/inventory', pc.getAll)
app.get('/api/alexis', pc.getAlexis)
app.get('/api/april', pc.getApril)

// --cartController--
app.post('/api/cart', auth.usersOnly, pc.addCart)
app.post('/api/order', auth.usersOnly, pc.placeOrder)
app.put('/api/cart/:id')
app.delete('/api/cart/:id', auth.usersOnly, pc.removeCart)


//--designerController-- 
app.get('/api/orders', auth.adminsOnly, dc.getOrder)
app.post('/api/new_item', auth.adminsOnly, dc.addProduct)
app.put('/api/inventory/:product_id', auth.adminsOnly, dc.editProduct)
app.delete('/api/inventory/:product_id', auth.adminsOnly, dc.removeProduct)

app.listen(SERVER_PORT, ()=> {
    console.log(`Listening on port ${SERVER_PORT}.`)
})