import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getUser, removeFromCart} from '../reducks/reducer';

class Cart extends Component{
    constructor(){
        super()
        this.state ={
            special_requests: '',
            address: '',
            city: '',
            state: '',
            zip_code: ''
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.props.getUser();
    }
    handleDelete(){
        this.props.getUser();
    }

    render(){
        console.log('Cart: reducer.user.cart', this.props.reducer.user.cart)
        // console.log(this.props.customer)
        // console.log(this.props.state)
        console.log('Cart: reducer.cart.cart', this.props.reducer.cart.cart)
        return(
            <main>
                <Link to='/'><button>Home</button></Link>
                <section>
                    <h1>Cart</h1>
                    <section className='cart'>
                        {/* {this.props.username ? this.props.cart ? this.props.cart.map((item, index)=>{
                            return(
                                <div key={index}>
                                    <img className = 'item-img' src={require(`../images/${item.image}.jpg`)} alt={item.product_name}/>
                                    <h3>{item.product_name}</h3>
                                    <h3 id='description'>{item.description}</h3>
                                    <h3>{item.price}</h3>
                                    <textarea placeholder='Special Requests (size, color, ect)'/>
                                    <button onClick={()=>{this.props.removeFromCart(index); console.log('deleted item ', index)}}>Delete</button>
                                </div>
                            )
                        }) : null : (<h1>Please sign in to view cart.</h1>)} */}

                        <section className='user-cart'>
                            {console.log(this.props.reducer.cart.cart)}
                            {this.props.reducer.cart && this.props.reducer.cart.cart.map((product, index)=>{
                                console.log(product)
                            return(
                                <div key={product.product_id}>
                                <img className = 'item-img' src={require(`../images/${product.image}.jpg`)} alt={product.product_name}/>
                                <h3>{product.product_name}</h3>
                                <h3 id='description'>{product.description}</h3>
                                <h3>{product.size}</h3>
                                <h3>{product.quantity * product.price} ({product.quantity} for {product.price}) each.</h3>
                                <button>edit</button>
                                <textarea placeholder='Special Requests (color, material, ect)'/>
                                <button onClick={()=>{this.props.removeFromCart(product, product.product_id); this.handleDelete(); console.log('deleted item ', index)}}>Delete</button>
                            </div>)})}
                        </section>
                    </section>
                    {/* {console.log(this.props.user)} */}
                    {/* <h3>Total: {this.props.user.total}</h3> */}
                </section>
                <section>
                    <h1>{this.props.reducer.first_name}</h1>
                    {/* {this.props.user.last_name} */}
                    <section className='cart-footer'>
                        <h3 className='mark'>Address: <input /></h3>
                        <h3>Apt number: <input /></h3>
                    </section>
                    <section className='cart-footer'>
                        <h3 className='mark'>City: <input /></h3>
                        <h3 className='mark'>State: <input /></h3>
                        <h3>Zip code: <input /></h3>
                    </section>
                </section>
                <button onClick={()=>{console.log(`send cart to orders table`)}}>Checkout</button>
            </main>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {getUser, removeFromCart})(Cart);