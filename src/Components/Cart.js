import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getUser, removeFromCart} from '../reducks/reducer';

class Cart extends Component{
    constructor(){
        super()
        this.state ={
            
        }
    }

    componentDidMount(){
        this.props.getUser();
    }

    render(){
        console.log(this.props.cart)
        // console.log(this.props.customer)
        // console.log(this.props.state)
        console.log(this.props.user)
        return(
            <main>
                <Link to='/'><button>Home</button></Link>
                <section className='cart'>
                    <h1>Cart</h1>
                    <section>
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

                        <section>
                            {this.props.cart.cart && this.props.cart.cart.map((product, index)=>{
                            return(
                                <div key={index}>
                                <img className = 'item-img' src={require(`../images/${product.image}.jpg`)} alt={product.product_name}/>
                                <h3>{product.product_name}</h3>
                                <h3 id='description'>{product.description}</h3>
                                <h3>{product.price}</h3>
                                <textarea placeholder='Special Requests (size, color, ect)'/>
                                <button onClick={()=>{this.props.removeFromCart(index); console.log('deleted item ', index)}}>Delete</button>
                            </div>)})}
                        </section>
                    </section>
                </section>
                <button onClick={()=>{console.log('send this.props.cart to orders table')}}>Checkout</button>
            </main>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {getUser, removeFromCart})(Cart);