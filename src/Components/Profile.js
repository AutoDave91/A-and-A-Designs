import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Axios from 'axios';

class Profile extends Component {
    constructor(){
        super()
        this.state ={
            user:{}
        }
    }

    componentDidMount(){
        console.log('profile mounted')
    }

    render(){
        return(
            <main className='profile'>
                <h1>Howdy Friend</h1>
                <section className='names-user'>

                </section>
                <section className='email-subbed'>

                </section>
                <section className='order-history'>

                </section>
            </main>
        )
    }
}

export default Profile