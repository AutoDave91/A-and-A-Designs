function addProduct(req, res){
    const {product_name, description, price, image, designer} = req.body;
    const db =req.app.get('db');
    db.add_inventory([product_name, description, price, image, designer]).then(response =>res.status(200).json(response))
        .catch(()=>console.log('Failed to add from Wizard'))
}
function removeProduct(req, res){
    // console.log(typeof req.params.product_id, req.params.product_id)
    // console.log(typeof +req.params.product_id)
    let id = +req.params.product_id;
    // console.log('id', id)
    const db = req.app.get('db');

    db.remove_inventory(id)
    .then(response =>res.status(200).json(response))
    .catch(()=>console.log('cant delete item'))
}
function getOrder(req, res){
    const db = req.app.get('db');
    db.get_orders().then(response =>res.status(200).json(response))
        .catch(()=> {
            console.log('error loading orders');
            res.sendStatus(500)
        })
}
function editProduct(req, res){
    const {product_name, description, price, image, designer} = req.body;
    const db = req.app.get('db');
    let product_id = +req.params.product_id

    db.edit_product([product_id, product_name, description, price, image, designer]).then(response => res.status(200).json(response))
    .catch(()=>console.log('error editing product'))
}

module.exports={
    addProduct, editProduct, removeProduct, getOrder
}