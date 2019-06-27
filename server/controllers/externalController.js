require('dotenv').config();

const {STRIPE_SECRET_KEY} = process.env

// Stripe (payment)
const stripe = require('stripe')(STRIPE_SECRET_KEY);
const uuid = require('uuid/v4');

async function checkout(req, res) {
    // console.log("Request:", req.body);
    // console.log('stripe: ', stripe.customers)
    // console.log(stripe.charges)
    
    let error;
    let status;
    let address;
    try {
        const { total, cart, token } = req.body;
        // console.log('EC19: ', cart)
        let items = '';
        for(i=0; i<cart.length; i++){
            items += `${cart[i].product_name}`
            if(i<cart.length-1){
                items += ', '
            } else {
                items += '.'
            }
        }
        // console.log('EC29: ', items)
    
        const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
        });
    
        const idempotency_key = uuid();
        const charge = await stripe.charges.create({
            amount: (Math.round(total * 100)),
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchased: ${items}`,
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
        // console.log("Charge:", { charge });
        status = "success";
        address = {charge};
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }
    
    res.json({ error, status, address });
    // console.log('EC67: ', status, address.charge.shipping.address)

};

module.exports ={
    checkout
}