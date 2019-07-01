import React, {Component} from 'react';
import { connect } from 'react-redux';

import {getUser, addToCart} from '../reducks/reducer';

class Item extends Component{
    constructor(){
        super()
        this.state={
            size: 'clothing size',
            quantity: 1,
            notes: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    
    render(){
        // console.log(this.props.item)
        // console.log(this.state.notes)
        let {product_id, product_name, image, description, price, designer} = this.props.item
        return(
            <main>
                <section className= "item-profile">
                    <img className = 'item-img' src={require(`../images/${image}.jpg`)} alt={product_name}/>
                    <h3 className='product-name'>{product_name}</h3>
                    <h3 id='description'>{description}</h3>
                    <h3>${price}</h3>
                    {this.props.reducer.user.username ? (
                    <div>
                        <section className='size-quantity'>
                        {designer === 'April' ? (
                        <h3>Size: <input className='size' name='size' type='text' onChange={this.handleChange} /></h3>
                        ) : null
                        }
                            <h3>Quantity: <input className='quantity' name='quantity' type='number' placeholder={this.state.quantity} onChange={this.handleChange}/></h3>
                        </section>
                        <section>
                        <textarea name='notes' onChange={this.handleChange} placeholder='Special Requests (color, material, ect)' />
                        <button id='addToCart' onClick={()=> {this.props.addToCart(product_id, product_name, image, this.state.size, description, price, this.state.quantity, this.state.notes); this.setState({size: '', quantity: 1, notes: ''})}}>Add to Cart</button>
                        </section>
                    </div>
                    ) : null
                    }
                </section>
            </main>
        )
    }
}

const mapStateToProps = state =>state;
export default connect(mapStateToProps,{getUser, addToCart})(Item);