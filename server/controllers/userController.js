function getUser(req, res){
    const db = req.app.get('db');
    db.get_users().then(response =>res.status(200).json(response))
        .catch(()=> {
            console.log('error loading users');
            res.sendStatus(500)
        })
}

module.exports={
    getUser
}