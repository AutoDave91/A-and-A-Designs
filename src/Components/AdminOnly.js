import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Axios from 'axios';

import AdminItem from '../Components/AdminItem';

class AdminOnly extends Component {
    constructor(){
        super()
        this.state ={
            orders: [],
            popular: [],
            inventory: []
        }
    }

    componentDidMount(){
        Axios.get('/api/inventory').then(response=>
            this.setState({inventory: response.data}))
            .catch(()=> console.log('inventory error at componentDidMount'))
        Axios.get('/api/popular').then(response=>
            this.setState({popular: response.data}))
            .catch(()=> console.log('popular error at componentDidMount'))
        Axios.get('/api/orders').then(response=>
            this.setState({orders: response.data}))
            .catch(()=> console.log('order error at componentDidMount'))
    }

    render(){
        console.log('Order Check: ', this.state.orders)
        let {orders} = this.state;

        return(
            <main>
                <header>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/designer/step1'><button>Add Item</button></Link>
                    <h1>How may I assist you?</h1>
                </header>
                <section className='admin-container'>
                    <section className='admin-elements'>
                        <h1>Orders</h1>
                        {orders.map((order, index)=>(
                            <p>{order.designer}, {order.quantity} of {order.product_name} ordered by {order.first_name}.</p>
                        ))}
                    </section>
                    <section className='admin-elements'>
                        <h1>Popular Items</h1>
                    </section>
                </section>
                <h1 className='items'>Inventory</h1>
                <section className='items'>
                    {this.state.inventory.map((item, index)=>(
                        <AdminItem key={index} item={item} inventory={this.state.inventory}/>
                    ))}
                </section>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        username: state.username
    }
}
export default connect(mapStateToProps)(AdminOnly);