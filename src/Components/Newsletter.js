import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Axios from 'axios';
import {connect} from 'react-redux';

class Newsletter extends Component {
    constructor(){
        super()
        this.state ={
            subject: '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    sendEmail(){
        let {subject, body} = this.state
        Axios.post('/api/email', {subject, body})
    }

    render(){
        // {if(!this.props.reducer.user || this.props.reducer.user.admin !== true){
        //     return <Redirect to='/' />
        //     }}
        return(
            <main className='newsletter'>
                <h1>--- Newsletter ---</h1>
                <section>
                    <div>
                        <h1>Subject</h1>
                        <input name='subject' type='text' onChange={this.handleChange} placeholder='subject' value={this.state.subject} />
                    </div>
                    <div className='newsletter-body'>
                        <h1>Body of email</h1>
                        <textarea className='news-text' name='body' type='text' onChange={this.handleChange} value={this.state.body}/>
                    </div>
                </section>
                <Link to='/designer'><button>Cancel</button><button onClick={this.sendEmail}>Send</button></Link>
            </main>
        )
    }
}

export default Newsletter