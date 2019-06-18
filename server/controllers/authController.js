const bcrypt = require('bcrypt')

async function register(req, res){
    const {first_name, last_name, newUsername, newPassword, email, phone_number} = req.body;
    const username = newUsername
    const password = newPassword
    const db = req.app.get('db');
    const result = await db.get_user([username])
    const existingUser = result[0];
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(req.body)
    const registeredUser = await db.add_user([first_name, last_name, username, hash, email, phone_number])
    const user = registeredUser[0];

    if(existingUser){
        return res.status(409).json('Username taken');
    }
    req.session.customer = {username: user.username, id: user.id}
    return res.status(201).json(req.session.customer)
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
    req.session.customer = {id: user.id, username: user.username}
    return res.send(req.session.customer)
}
async function logout(req, res){
    req.session.destroy();
    return res.sendStatus(200);
}

module.exports={
    register, login, logout
}