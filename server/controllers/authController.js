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
    console.log(req.body)
    
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
    req.session.customer = {
        id: user.id,
        username: user.username,
        admin: user.admin,
        first_name: user.first_name,
        cart:[],
        total: 0
    }
    return res.send(req.session.customer)
}
async function logout(req, res){
    req.session.destroy();
    console.log('logged out')
    return res.status(200).send(req.session);
}
async function getUser(req, res){
    if(req.session.customer){
        res.json(req.session.customer)
    } else {
        res.status(401).json(console.log('req.session.customer check, ', req.session.customer))
    }
}

module.exports={
    register, login, logout, getUser
}