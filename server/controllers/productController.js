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
    console.log(req.session.customer.cart)
    console.log(req.body)
    const {price} = req.body
    const productObject = req.body
    
    req.session.customer.cart.push(productObject)
    req.session.customer.total += +price
    res.status(200).json(req.session.customer)
}
function removeCart(req, res){
    console.log('PC: req.params.id', req.params.id)
    console.log(req.params)
    const {id} = req.params

    for(let i=0; i<req.session.customer.cart.length; i++){
        if(req.session.customer.cart[i].product_id == id){
            console.log('for loop check, ', req.session.customer.cart[i])
            req.session.customer.cart.splice(i, 1)
            req.session.customer.total -= +req.session.customer.cart[i].price
        }
    }
    
    res.status(200).json(req.session.customer)
    console.log('PC: req.session.customer.cart', req.session.customer.cart)
}

module.exports ={
    getAlexis, getApril, getAll, addCart, removeCart
}