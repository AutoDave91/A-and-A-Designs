function getAlexis(req, res){
    const db = req.app.get('db');
    db.get_Alexis().then(response =>res.status(200).json(response))
        .catch(()=> {
            console.log('error loading products by Alexis');
            res.sendStatus(500)
        })
}
function getApril(req, res){
    const db = req.app.get('db');
    db.get_April().then(response =>res.status(200).json(response))
        .catch(()=> {
            console.log('error loading products');
            res.sendStatus(500)
        })
}
function getAll(req, res){
    const db = req.app.get('db');
    db.get_inventory().then(response =>res.status(200).json(response))
        .catch(()=> {
            console.log('error loading products');
            res.sendStatus(500)
        })
}
function addCart(req, res){
    // console.log(req.session.customer.cart)
    // console.log(req.body)
    const {price, quantity} = req.body
    const productObject = req.body
    
    req.session.customer.cart.push(productObject)
    req.session.customer.total += (+price * +quantity)
    res.status(200).json(req.session.customer)
}
function removeCart(req, res){
    // console.log('PC: req.params', typeof req.params.id)
    // console.log(req.session.customer.cart)
    let index = +req.params.id

    req.session.customer.total -= (req.session.customer.cart[index].price * req.session.customer.cart[index].quantity)
    req.session.customer.cart.splice(index, 1)
    
    res.status(200).json(req.session.customer)
    console.log('PC: req.session.customer.cart', req.session.customer.cart)
}
function placeOrder(req, res){
    const {product_id, customer_id, quantity, delivered, total, address , city , state , zip_code} = req.body;
    const db =req.app.get('db');
    db.add_order([product_id, customer_id, quantity, delivered, total, address , city , state , zip_code]).then(response =>res.status(200).json(response))
        .catch(()=>console.log('Failed to add order'))
}

module.exports ={
    getAlexis, getApril, getAll, addCart, removeCart, placeOrder
}