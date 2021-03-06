import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Axios from 'axios';

import AdminItem from '../Components/AdminItem';

class AdminOnly extends Component {
    constructor(){
        super()
        this.state ={
            inventory: [],
            orders: [],
            designer: 'A & A Designs',
            order: 0,
            product: 'product',
            quantity: 0,
            notes: 'notes',
            name: ['first', 'last'],
            email: 'email',
            address: 'street',
            city: 'city',
            state: 'state',
            zip_code: 'zip code',
            delivered: false
        }
        this.removeItem = this.removeItem.bind(this)
        this.orderShipped = this.orderShipped.bind(this)
    }

    componentDidMount(){
        Axios.get('/api/inventory').then(response=>
            this.setState({inventory: response.data}))
            .catch(()=> console.log('inventory error at componentDidMount'))
       Axios.get('/api/orders').then(response=>
            this.setState({orders: response.data}))
            .catch(()=> console.log('order error at componentDidMount'))
    }
    removeItem(product_id){
        // console.log(product_id)
        Axios.delete(`/api/inventory/${product_id}`).then(response=>{
            // console.log(response);
            this.setState({inventory:response.data})})
        .catch(console.log('failed to delete'))
    }
    orderShipped(order_id){
        // console.log(order_id.order)
        // let {target} = this.state
        let status = true
        this.setState({delivered: true})
        Axios.put(`/api/shipped/${order_id.order}`, {status})
    }

    render(){
        let {orders} = this.state;
        let {designer, order, product, quantity, notes, delivered, name, email, address, city, state, zip_code} = this.state
        // console.log(this.state.orders)

        {if(!this.props.reducer.user || this.props.reducer.user.admin !== true){
            return <Redirect to='/' />
            }}
        return(
            <main>
                <nav>
                    <Link to='/designer/newsletter'><button>Newsletter</button></Link>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/designer/step1'><button>Add Item</button></Link>
                </nav>
                <section className='admin-container'>
                    <section className='admin-elements'>
                        <h1>Orders</h1>
                        {orders.map((order, index)=>(
                            <p key={index} className='order-list' onClick={()=>{this.setState({
                                designer: order.designer,
                                order: order.order_id,
                                product: order.product_name,
                                quantity: order.quantity,
                                notes: order.notes,
                                delivered: order.delivered,
                                name: [order.first_name, order.last_name],
                                email: order.email,
                                address: order.address,
                                city: order.city,
                                state: order.state,
                                zip_code: order.zip_code
                                })
                            }}>{order.designer.toUpperCase()}, {order.first_name} ordered {order.quantity} of {order.product_name}. Order {order.order_id} delivered: {order.delivered.toString().toUpperCase()}</p>
                        ))}
                    </section>
                    <section className='admin-elements'>
                        <h1>Order Details</h1>
                        <ul>
                            <li>Designer: {designer.toUpperCase()}</li>
                            <li>Order {order} has been shipped: {delivered.toString().toUpperCase()}</li>
                            <li>{quantity} of {product}</li>
                            <li>{notes}</li>
                            <h1>Customer Profile</h1>
                            <ul className='customer-profile'>
                                <li>{`${name[0]} ${name[1]}`}</li>
                                <li>{email}</li>
                                <li>{address}</li>
                                <li>{`${city}, ${state}, ${zip_code}`}</li>
                            </ul>
                            <Link to='/designer'><button onClick={()=> {this.orderShipped({order})}}>Log Order Shipped</button></Link>
                        </ul>
                    </section>
                </section>
                <section className='items'>
                    {this.state.inventory.map((item, index)=>(
                        <AdminItem key={index} item={item} inventory={this.state.inventory} removeItem={this.removeItem}/>
                    ))}
                </section>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        reducer: state.reducer
    }
}
export default connect(mapStateToProps)(AdminOnly);