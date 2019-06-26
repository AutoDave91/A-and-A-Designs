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
            zip_code: '',
            user: {},
            cart: [],
            total: 0
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.props.getUser().then(response=>{this.setState({cart: response.value.data.cart, total: parseFloat(Math.round(response.value.data.total * 100) / 100).toFixed(2)})});
    }
    handleDelete(){
        this.props.getUser()
            .then(response=>{console.log('getUser', response.value.data)
            this.setState({cart: response.value.data.cart, total: parseFloat(Math.round(response.value.data.total * 100) / 100).toFixed(2)})
            })
            .catch(()=> console.log('handleDelete error at componentDidMount'))
    }

    render(){
        // console.log('Cart: reducer.user.cart', this.props.reducer.user.cart)
        // console.log(this.props.customer)
        console.log(this.state)
        // // console.log('Cart: reducer.cart.cart', this.props.reducer.cart.cart)
        console.log('being mapped', this.props.reducer.cart.cart)
        let {total, cart, user} = this.state
        return(
            <main>
                <Link to='/'><button>Home</button></Link>
                <section>
                    <h1>Cart total: ${total}</h1>
                    <section className='cart'>
                        <section className='user-cart'>
                            {console.log(this.props.reducer.cart.cart)}
                            {cart && cart.map((product, index)=>{
                                console.log(product)
                            return(
                                <div className='cart-item' key={index}>
                                <img className = 'item-img' src={require(`../images/${product.image}.jpg`)} alt={product.product_name}/>
                                <h3>{product.product_name}</h3>
                                <h3 id='description'>{product.description}</h3>
                                <h3>{product.size}</h3>
                                <h3>{product.quantity * product.price} ({product.quantity} for {product.price}) each.</h3>
                                <button>edit</button>
                                <textarea placeholder='Special Requests (color, material, ect)'/>
                                <button onClick={()=>{this.props.removeFromCart(index); this.handleDelete(); console.log('deleted item ', index)}}>Delete</button>
                            </div>)})}
                        </section>
                    </section>
                    {/* {console.log(this.props.user)} */}
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
                <button onClick={()=>{console.log(`send cart to orders table`)}}>Checkout {total}</button>
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