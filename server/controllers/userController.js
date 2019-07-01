function getUser(req, res){
    const db = req.app.get('db');
    db.get_users().then(response =>res.status(200).json(response))
        .catch(()=> {
            console.log('error loading users');
            res.sendStatus(500)
        })
}
function switchSub(req, res){
    console.log(typeof req.body.customer_id);
    let {customer_id, newsletter} = req.body;
    console.log(`customer_id: ${customer_id}...newsletter: ${newsletter}`)
    const db = req.app.get('db');

    if(newsletter === true){
        console.log('switchSub: unsub', customer_id)
        db.unsub([customer_id]).then(response =>{console.log(response); res.status(200).json(response)}).catch(err => console.log(err))
    } else if(newsletter === false){
        console.log('switchSub: sub', customer_id)
        db.sub([customer_id]).then(response =>{console.log(response);res.status(200).json(response)}).catch( err => console.log(err))
    } else {
        console.log('UC17: failed')
    }
}

module.exports={
    getUser, switchSub
}