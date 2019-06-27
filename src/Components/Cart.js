import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'
import Axios from 'axios';
import {toast} from 'react-toastify';

import {getUser, removeFromCart} from '../reducks/reducer';

toast.configure()

class Cart extends Component{
    constructor(){
        super()
        this.state ={
            special_requests: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            user: {},
            cart: [],
            total: 0
        }
        this.handleToken = this.handleToken.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }

    componentDidMount(){
        this.props.getUser()
    }

    // Stripe
    
    async placeOrder(bulkAddress){
        let {total, cart, id} = this.props.reducer.cart;
                let customer_id = id;
                console.log(customer_id)
                let product_id = '{';
                console.log(product_id)
                let quantity = '{';
                console.log(quantity)
                let notes = '{';
                console.log(notes)
                let {line1, line2, city, state, zip_code} = bulkAddress
                let address = `${line1} ${line2}`
                console.log(address, city, state, zip_code)

                cart.forEach(function(item){
                    product_id += `${item.product_id}, `;
                    quantity += `${item.quantity}, `;
                    notes += `${item.notes}, `;
                })
                product_id += '}'
                quantity += '}'
                notes += '}'

                Axios.post('/api/order', {product_id, customer_id, quantity, total, address, city, state, zip_code, notes})
    }

    async handleToken(token){
        // console.log({token})
        let {cart, total} = this.props.reducer.user
        // console.log(cart)
        const response = await Axios.post('/api/checkout', {token, cart, total});
        const {status, address} = response.data
        // console.log(status)
        if(status === 'success'){
            toast('Success! Check email for details.', {type: "success"});

            // console.log(address.charge.shipping.address)
            this.placeOrder(address.charge.shipping.address)
        } else {
            toast('Something went wrong...', {type: 'error'})
        }
    }

    render(){
        // console.log('Cart: reducer.user.cart', this.props.reducer.user.cart)
        // console.log(this.props.customer)
        console.log(this.props)
        // // console.log('Cart: reducer.cart.cart', this.props.reducer.cart.cart)
        // console.log('being mapped', this.props.reducer.cart.cart)
        let {total, cart, user} = this.props.reducer.user
        return(
            <main>
                <Link to='/'><button>Home</button></Link>
                <section>
                    <h1 className='cart-total'>Cart total: ${parseFloat(Math.round(total * 100) / 100).toFixed(2)}</h1>
                    <section className='cart'>
                        <section className='user-cart'>
                            {/* {console.log(this.props.reducer.cart.cart)} */}
                            {cart && cart.map((product, index)=>{
                                // console.log(product)
                                return(
                                    <section className='cart-items'>
                                        <div className='cart-item' key={index}>
                                            <img className = 'item-img' src={require(`../images/${product.image}.jpg`)} alt={product.product_name}/>
                                            <h3>{product.product_name}</h3>
                                            <h3 id='description'>{product.description}</h3>
                                            <h3>{product.size}</h3>
                                            <h3>${product.quantity * product.price} ({product.quantity} for {product.price} each).</h3>
                                            {/* <button>edit</button> */}
                                            <textarea placeholder='Special Requests (color, material, ect)'/>
                                            <div>
                                                <button onClick={()=>{this.props.removeFromCart(index);
                                                    // this.handleDelete(); console.log('deleted item ', index)
                                                    }}>Delete</button>
                                            </div>
                                        </div>
                                    </section>
                                )
                            })}
                        </section>
                    </section>
                    {/* {console.log(this.props.user)} */}
                </section>
                <section>
                    <h1>{this.props.reducer.cart.first_name}, are you ready to purchase your cart?</h1>
                    <StripeCheckout
                        stripeKey='pk_test_HJ7iE5S9cfrxu0FQAIO77MjX00OMBj5e48'
                        token={this.handleToken}
                        billingAddress
                        shippingAddress
                        amount={+total *100}
                        name={'A & A Designs'}
                    />
                    {/* {this.props.user.last_name} */}
                    {/* <section className='cart-footer'>
                        <h3 className='mark'>Address: <input /></h3>
                        <h3>Apt number: <input /></h3>
                    </section>
                    <section className='cart-footer'>
                        <h3 className='mark'>City: <input /></h3>
                        <h3 className='mark'>State: <input /></h3>
                        <h3>Zip code: <input /></h3>
                    </section> */}
                </section>
                {/* <button onClick={()=>{console.log(`send cart to orders table`)}}>Checkout {total}</button> */}
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        reducer: state.reducer
    }
}
export default connect(mapStateToProps, {getUser, removeFromCart})(Cart);