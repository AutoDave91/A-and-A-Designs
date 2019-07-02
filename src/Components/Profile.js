import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
import Axios from 'axios';

class Profile extends Component {
    constructor(){
        super()
        this.state ={
            user:{},
            orders:[]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        Axios.get('/auth/user')
        .then(response => {
            // console.log(response);
            this.setState({user: response.data})
        })
        Axios.get('/api/order/history')
            .then(response =>{
                // console.log(response);
                this.setState({orders: response.data})
            })
    }
    handleClick(){
        let customer_id = this.state.user.id
        let newsletter = this.state.user.newsletter
        Axios.put('/api/sub', {customer_id, newsletter}).then(response =>{
            // console.log(response.data[0])
            this.setState({user:{first_name: response.data[0].first_name, last_name: response.data[0].last_name, username: response.data[0].username, email: response.data[0].email, newsletter: response.data[0].newsletter}})
            // this.setState({user: response.data[0]})
        })
    }

    render(){
        // console.log(this.state.user)
        let {first_name, last_name, username, email, newsletter} = this.state.user
        
        return(
            <main className='profile'>
                <Link to='/'><button>Home</button></Link>
                <h1>Howdy Friend</h1>
                <section className='names-user'>
                    <h2>{first_name} {last_name}</h2>
                    <h2>Username: {username}</h2>
                </section>
                <section className='email-subbed'>
                    <h2>Email: {email}</h2>
                    {newsletter === true ? (
                        <section>
                            <h2>Subscribed to newsletter</h2>
                            <Link to='/'><button onClick={this.handleClick}>Unsubscribe</button></Link>
                        </section>
                        ) : <section>
                                <h2>Not currently subscribed to newsletter</h2>
                                <Link to='/'><button onClick={this.handleClick}>Subscribe</button></Link>
                            </section>
                    }
                </section>
                <section className='order-history'>
                    {this.state.orders.map((order)=>(
                        <section className='order'>
                            <h2>Order number: {order.order_id}</h2>
                            <h3>{order.quantity}x {order.product_name}.</h3>
                            <h3>Order delivered: {order.delivered.toString()}</h3>
                        </section>
                        ))}
                </section>
            </main>
        )
    }
}

export default Profile