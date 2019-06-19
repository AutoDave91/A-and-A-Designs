// let newItem = {}

function wizard1(req, res){
    let {product_name, description, price} = req.body;
    newItem = {...newItem, product_name, description, price}
    // console.log(newItem)
}
function wizard2(req, res){
    let {image, designer} = req.body;
    // console.log(req.body)
    newItem ={...newItem, image, designer}
    // console.log(newItem)
}
function addProduct(req, res){
    const db =req.app.get('db');
    db.add_inventory().then(response =>res.status(200).json(response))
        .catch(()=>console.log('Failed to add from Wizard'))
    // console.log('sending', newItem)

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

module.exports ={
    wizard1, wizard2, addProduct, getAlexis, getApril, getAll
}