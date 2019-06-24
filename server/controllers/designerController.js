function addProduct(req, res){
    const {product_name, description, price, image, designer} = req.body;
    const db =req.app.get('db');
    db.add_inventory([product_name, description, price, image, designer]).then(response =>res.status(200).json(response))
        .catch(()=>console.log('Failed to add from Wizard'))
}
function removeProduct(req, res){
    const {} = req.body;
    const db = req.app.get('db');

    db.remove_inventory()
}

function getPopular(req, res){
    console.log('getPopular')
}
function getOrder(req, res){
    const db = req.app.get('db');
    db.get_orders().then(response =>res.status(200).json(response))
        .catch(()=> {
            console.log('error loading orders');
            res.sendStatus(500)
        })
}

module.exports={
    addProduct, removeProduct, getPopular, getOrder
}