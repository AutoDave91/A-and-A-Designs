const newItem = {}

function wizard(){
 console.log('nope!')
}
function getAlexis(){
    const db = req.app.get('db');
    db.get_Alexis().then(response =>res.status(200).json(response))
        .catch(()=> {
            console.log('error loading products by Alexis');
            res.sendStatus(500)
        })
}
function getApril(){
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
    wizard, getAlexis, getApril, getAll
}