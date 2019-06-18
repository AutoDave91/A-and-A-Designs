import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Login extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: '',
            newUsername: '',
            newPassword: '',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            user: []
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.usernameInput = this.usernameInput.bind(this);
        this.passwordInput = this.passwordInput.bind(this);
        this.newUsernameInput = this.newUsernameInput.bind(this)
        this.newPasswordInput = this.newPasswordInput.bind(this)
        this.first_nameInput = this.first_nameInput.bind(this)
        this.last_nameInput = this.last_nameInput.bind(this)
        this.emailInput = this.emailInput.bind(this)
        this.phone_numberInput = this.phone_numberInput.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    usernameInput(value){
        this.setState({username: value} )
        // console.log(this.state.username)
    }
    passwordInput(value){
        this.setState({password: value} )
    }
    newUsernameInput(value){
        this.setState({newUsername: value} )
    }
    newPasswordInput(value){
        this.setState({newPassword: value} )
    }
    first_nameInput(value){
        this.setState({first_name: value} )
    }
    last_nameInput(value){
        this.setState({last_name: value} )
    }
    emailInput(value){
        this.setState({email: value} )
    }
    phone_numberInput(value){
        this.setState({phone_number: value} )
    }
    updateUser(user){
        // console.log('triggered')
        this.setState({
            user,
        })
    }
    login(){
        let {username, password} = this.state;
        Axios.post('/auth/login', {username, password})
            .then(user=>{
                console.log(username, password)
                this.setState({username: '', password: ''});
                console.log(user.data)
                this.updateUser(user.data);
                console.log('Logged in');
            })
            .catch(()=>{
                this.setState({username: '', password: ''});
                console.log('Login failed in Login component');
            })
    }
    register(){
        let {newUsername, newPassword, first_name, last_name, email, phone_number} = this.state;
        Axios.post('/auth/register', {newUsername, newPassword, first_name, last_name, email, phone_number})
            .then(user=>{
                this.setState({
                    newUsername: '',
                    newPassword: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: ''
                });
                this.updateUser(user.data)
                console.log('registered')
            })
            .catch(()=>{
                this.setState({
                    username: '',
                    password: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: ''
                })
                console.log('error registering')
            })
    }
    logout(){
        Axios.get('/auth/logout')
            .then(()=>{
                this.props.updateUser({})
            })
            .catch(()=>{
                console.log('error logging out')
            })
      }

    render(){
        let {username, password, newUsername, newPassword, first_name, last_name, email, phone_number} = this.state;
        // let {user} = this.props;

        return(
            <main className='login_register'>
                <Link to='/'><button>Home</button></Link>
                <section className='login'>
                    <h1>Login</h1>
                    <input name='username' placeholder='username' value={username} onChange={e => this.usernameInput(e.target.value)}/>
                    <input name='password' placeholder='password' value={password} onChange={e => this.passwordInput(e.target.value)}/>
                    <button onClick={this.login}>Login</button>
                </section>
                <h2>---OR---</h2>
                <section className='register'>
                    <h1>Register</h1>
                    <input name='username' placeholder='username' value={newUsername} onChange={e => this.newUsernameInput(e.target.value)}/>
                    <input name='password' placeholder='password' value={newPassword} onChange={e => this.newPasswordInput(e.target.value)}/>
                    <input name='first_name' placeholder='first name' value={first_name} onChange={e => this.first_nameInput(e.target.value)}/>
                    <input name='last_name' placeholder='last name' value={last_name} onChange={e => this.last_nameInput(e.target.value)}/>
                    <input name='email' placeholder='email' value={email} onChange={e => this.emailInput(e.target.value)}/>
                    <input name='phone_number' placeholder='phone number' value={phone_number} onChange={e => this.phone_numberInput(e.target.value)}/>
                    <button onClick={this.register}>Sign Up</button>
                </section>
            </main>
        )
    }
}
export default Login;