import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: ''
        }
    }

    // handleChange(value){
    //     this.setState(e.target.name: value, )
    // }

    render(){
        return(
            <main className='login_register'>
                <Link to='/'><button>Home</button></Link>
                <section className='login'>
                    <h1>Login</h1>
                    <input name='username' placeholder='username' />
                    <input name='password' placeholder='password' />
                    <button>Login</button>
                </section>
                <h2>---OR---</h2>
                <section className='register'>
                    <h1>Register</h1>
                    <input name='username' placeholder='username' />
                    <input name='password' placeholder='password' />
                    <input name='first_name' placeholder='first name' />
                    <input name='last_name' placeholder='last name' />
                    <input name='email' placeholder='email' />
                    <input name='phone_number' placeholder='phone number' />
                    <button>Sign Up</button>
                </section>
            </main>
        )
    }
}
export default Login;