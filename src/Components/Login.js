import React, {Component} from 'react';

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
    render(){
        return(
            <main className='login_register'>
                <section className='login'>
                    <h1>Login</h1>
                    <input placeholder='username' />
                    <input placeholder='password' />
                    <button>Login</button>
                </section>
                <h2>---OR---</h2>
                <section className='register'>
                    <h1>Register</h1>
                    <input placeholder='username' />
                    <input placeholder='password' />
                    <input placeholder='first name' />
                    <input placeholder='last name' />
                    <input placeholder='email' />
                    <input placeholder='phone number' />
                    <button>Sign Up</button>
                </section>
            </main>
        )
    }
}
export default Login;