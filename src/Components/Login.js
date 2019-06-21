import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Axios from 'axios';
import {connect} from 'react-redux';

import {login, setUsername, setAdmin} from '../reducks/reducer';

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
            user: {},
            redirect: false,
            admin: false,
        }
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateUser = this.updateUser.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
        // console.log(this.state.username)
    }
    updateUser(user){
        this.setState({
            user,
        })
    }
    login(){
        let {username, password} = this.state;
        // Axios.post('/auth/login', {username, password})
        this.props.login(username, password)
        .then(user=>{
                // console.log(user.data.admin)
                // console.log(user)
                // console.log(username, password)
                // this.props.setUsername(user.data.username);
                // this.props.setAdmin(user.data.admin);
                this.setState({user: user.value.data, redirect: true});
                // console.log(user.data)
                // this.updateUser(user.data);
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
                this.props.setUsername(user.data.username);
                this.setState({
                    newUsername: '',
                    newPassword: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    redirect: true,
                });
                this.updateUser(user.data)
                console.log('registered')
            })
            .catch(()=>{
                this.setState({
                    newUsername: '',
                    newPassword: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: ''
                })
                console.log('error registering')
            })
    }

    render(){
        let {username, password, newUsername, newPassword, first_name, last_name, email, phone_number} = this.state;
        // console.log(this.state.user)
        // console.log(this.state.user.admin)
        // let {user} = this.props;
        if(this.state.redirect === true && this.state.user.admin === true){
            return <Redirect to='/designer' />
        }
        if(this.state.redirect === true && this.state.user.admin !== true){
            return <Redirect to='/' />
        }

        return(
            <main className='login_register'>
                <Link to='/'><button>Home</button></Link>
                <section className='login'>
                    <h1>Login</h1>
                    <input name='username' placeholder='username' value={username} onChange={this.handleChange}/>
                    <input name='password' placeholder='password' value={password} onChange={this.handleChange}/>
                    <button onClick={this.login}>Login</button>
                </section>
                <h2>---OR---</h2>
                <section className='register'>
                    <h1>Register</h1>
                    <input name='newUsername' placeholder='username' value={newUsername} onChange={this.handleChange}/>
                    <input name='newPassword' placeholder='password' value={newPassword} onChange={this.handleChange}/>
                    <input name='first_name' placeholder='first name' value={first_name} onChange={this.handleChange}/>
                    <input name='last_name' placeholder='last name' value={last_name} onChange={this.handleChange}/>
                    <input name='email' placeholder='email' value={email} onChange={this.handleChange}/>
                    <input name='phone_number' placeholder='phone number' value={phone_number} onChange={this.handleChange}/>
                    <button onClick={this.register}>Sign Up</button>
                </section>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        state
    }
}

export default connect(mapStateToProps, {login, setUsername, setAdmin})(Login);