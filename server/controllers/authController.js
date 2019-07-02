const bcrypt = require('bcrypt')

async function register(req, res){
    const {first_name, last_name, newUsername, newPassword, email, phone_number} = req.body;
    const username = newUsername
    const password = newPassword
    const db = req.app.get('db');
    const result = await db.get_user([username])
    const existingUser = result.length;
    // console.log('existingUser', existingUser)
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // console.log(req.body)
    
    if(existingUser > 0){
        console.log('Choose another username');
    } else {
        const registeredUser = await db.add_user([first_name, last_name, username, hash, email, phone_number])
        const user = registeredUser[0];
        req.session.customer = {username: user.username, id: user.id, admin: user.admin}
        return res.status(201).json(req.session.customer)
    }
}
async function login(req, res){
    const {username, password} = req.body;
    const db = req.app.get('db');
    const foundUser = await db.get_user([username]);
    const user = foundUser[0];
    const isAuthenticated = bcrypt.compareSync(password, user.password);

    if(!user){
        return res.status(401).json('I do not know you');
    }
    if(!isAuthenticated){
        return res.status(403).json('Try again');
    }
    // console.log(user)
    req.session.customer = {
        id: user.customer_id,
        username: user.username,
        admin: user.admin,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        newsletter: user.newsletter,
        cart:[],
        total: 0
    }
    return res.send(req.session.customer)
}
async function logout(req, res){
    req.session.destroy();
    // console.log('logged out')
    return res.status(200).send(req.session);
}
async function getUser(req, res){
    // console.log('AC:53 ->', req.session)
    // console.log('AC55: ', req.session.customer)
    if(req.session.customer){
        res.json(req.session.customer)
    } else {
        res.status(401).json(console.log('no user found'))
    }
}
async function userOrders(req, res){
    // console.log('AC66: ', req.body)
    const {id} = req.body
    let customer_id = id
    const db = req.app.get('db');
    db.get_user_orders([customer_id]).then(response =>{
        // console.log('AC70: ', response);
        res.status(200).json(response)})
        .catch(()=> {
            // console.log('error loading orders');
            res.sendStatus(500)
        })
}

module.exports={
    register, login, logout, getUser, userOrders
}