import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {handleName, handleDescription, handlePrice, addStep1} from '../../reducks/reducer';

class Step1 extends Component{
    constructor(){
        super()
        this.state ={
            product_name: '',
            description: '',
            price: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
    }
    
    handleName(e){
        // this.setState({product_name: e.target.value})
        this.props.handleName(e.target.value)
    }
    handleDescription(e){
        // this.setState({description: e.target.value})
        this.props.handleDescription(e.target.value)
    }
    handlePrice(e){
        // this.setState({price: e.target.value})
        this.props.handlePrice(e.target.value)
    }
    handleClick(){
        // let {product_name, description, price} = this.state;

        // this.props.addStep1(product_name, description, price)

        console.log(this.props.product_name, this.props.description, this.props.price)

    }

    render(){
        // console.log('Step 1', this.state)
        return(
            <main>
                <h1>Step1</h1>
                <section className='step1-inputs'>
                    <h2>Product Name</h2>
                    <input onChange={this.handleName} value={this.props.product_name}></input>
                    <h2>Description</h2>
                    <textarea onChange={this.handleDescription} value={this.props.description}></textarea>
                    <h2>Price</h2>
                    <input onChange={this.handlePrice} value={this.props.price}></input>
                </section>
                <Link to='/designer'><button>Cancel</button></Link>
                <Link to='/designer/step2'><button onClick={this.handleClick}>Next</button></Link>
            </main>
        )
    }
}

export default connect((state) => state, {handleName, handleDescription, handlePrice, addStep1})(Step1);