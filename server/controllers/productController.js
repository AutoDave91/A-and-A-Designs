function addProduct(req, res){
    const {product_name, description, price, image, designer} = req.body;
    const db =req.app.get('db');
    db.add_inventory([product_name, description, price, image, designer]).then(response =>res.status(200).json(response))
        .catch(()=>console.log('Failed to add from Wizard'))

}
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
    // const db = req.app.get('db')

    // db.get_product(product).then(response => {
    //     let productObject = response;
        req.session.customer.cart.push(productObject)
        req.session.customer.total += +price
        res.status(200).json(req.session.customer)
    
}
function removeCart(req, res){
    const {id} = req.params.id
    const {price} = req.body
    const db = req.app.get('db')

    db.remove_product(id).then(response => {
        let item = response;
        req.session.user.cart.splice(item ,1)
        req.session.user.total -= +price
        res.status(200).json(req.session.user)
    })
}

module.exports ={
    addProduct, getAlexis, getApril, getAll, addCart, removeCart
}