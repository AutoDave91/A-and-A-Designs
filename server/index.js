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
const sc = require('./controllers/stripeController');
const nc = require('./controllers/nodeMailerController');


// general server setup w/session and database
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())
app.use(express.static(`${__dirname}/../build`))
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}))
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
// app.get('/api/order/history', ac.userOrders)

// --userController--
app.put('/api/sub', auth.usersOnly, uc.switchSub)
app.get('/api/order/history', auth.usersOnly, uc.getOrderHistory)

// --productController--
app.get('/api/inventory', pc.getAll)
app.get('/api/bows&bands', pc.getAlexis)
app.get('/api/cloths', pc.getApril)

// --cartController--
app.post('/api/cart', auth.usersOnly, pc.addCart)
app.post('/api/order', auth.usersOnly, pc.placeOrder)
app.put('/api/cart/:id')
app.delete('/api/cart/:id', auth.usersOnly, pc.removeCart)

// --stripeController & nodeMailerController--
app.post('/api/checkout',auth.usersOnly, sc.checkout)
app.post('/api/email', auth.adminsOnly, nc.newsletter)

//--designerController-- 
app.get('/api/orders', auth.adminsOnly, dc.getOrder)
app.post('/api/new_item', auth.adminsOnly, dc.addProduct)
app.put('/api/shipped/:order_id', auth.adminsOnly, dc.shippedOrder)
app.put('/api/inventory/:product_id', auth.adminsOnly, dc.editProduct)
app.delete('/api/inventory/:product_id', auth.adminsOnly, dc.removeProduct)

// DEFAULT
    app.listen(SERVER_PORT, ()=> {
        console.log(`Listening on port ${SERVER_PORT}.`)
    })