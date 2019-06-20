import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getUser, removeFromCart} from '../reducks/reducer';

class Cart extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }

    componentDidMount(){
        this.props.getUser();
        // this.props.removeFromCart();
    }

    render(){
        console.log(this.props.cart)
        return(
            <main>
                <Link to='/'><button>Home</button></Link>
                <h1>Welcome {this.props.username}</h1>
                <section className='cart'>
                    <h1>Cart</h1>
                    <section>
                        {this.props.username ? this.props.cart ? this.props.cart.map((item, index)=>{
                            return(
                                <div key={index}>
                                    <img className = 'item-img' src={require(`../images/${item.image}.jpg`)} alt={item.product_name}/>
                                    <h3>{item.product_name}</h3>
                                    <h3 id='description'>{item.description}</h3>
                                    <h3>{item.price}</h3>
                                    <button onClick={this.props.removeFromCart}>Delete</button>
                                </div>
                            )
                        }) : null : null}
                    </section>
                </section>
                <button>Checkout</button>
            </main>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {getUser, removeFromCart})(Cart);