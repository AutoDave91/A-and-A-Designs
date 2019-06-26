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


// general server setup w/session and database
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())
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

// Stripe (payment)
const stripe = require('stripe')('sk_test_r3kahHBHQM7gx961ULee5Rpb00wGAs8kQB');
const uuid = require('uuid/v4');
// const cors = require('cors')

// app.use(cors());

app.post("/api/checkout", async (req, res) => {
    // console.log("Request:", req.body);
    // console.log('stripe: ', stripe.customers)
    // console.log(stripe.charges)
    
    let error;
    let status;
    try {
        const { total, cart, token } = req.body;
        console.log('Cart: ', cart)
    
        const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
        });
    
        const idempotency_key = uuid();
        const charge = await stripe.charges.create(
        {
            amount: (Math.round(total * 100)),
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchased the ${[items]}`,
            shipping: {
            name: token.card.name,
            address: {
                line1: token.card.address_line1,
                line2: token.card.address_line2,
                city: token.card.address_city,
                country: token.card.address_country,
                postal_code: token.card.address_zip
            }
            }
        },
        {
            idempotency_key
        }
        );
        console.log("Charge:", { charge });
        status = "success";
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }
    
    res.json({ error, status });
    console.log(status)
    });

// DEFAULT
    app.listen(SERVER_PORT, ()=> {
        console.log(`Listening on port ${SERVER_PORT}.`)
    })