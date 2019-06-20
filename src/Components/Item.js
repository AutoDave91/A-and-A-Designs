import React, {Component} from 'react';
import { connect } from 'react-redux';

import {getUser, addToCart} from '../reducks/reducer';

class Item extends Component{
    // console.log(props.item)
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        let {product_name, image, description, price} = this.props.item
        return(
            <main>
                <section className= "item-profile">
                    <img className = 'item-img' src={require(`../images/${image}.jpg`)} alt={product_name}/>
                    <h3>{product_name}</h3>
                    <h3 id='description'>{description}</h3>
                    <h3>{price}</h3>
                    
                    <button id='addToCart' onClick={()=> {this.props.addToCart(product_name,description, price, image); console.log('Added to cart')}}>Add to Cart</button>
                </section>
            </main>
        )
    }
}

const mapStateToProps = state =>state;
export default connect(mapStateToProps,{getUser, addToCart})(Item);