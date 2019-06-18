import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {addStep1, addStep2} from '../../reducks/reducer';

class Step1 extends Component{
    constructor(){
        super()
        this.state ={
            name: '',
            description: '',
            price: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
    }
    
    handleName(e){
        this.setState({name: e.target.value})
    }
    handleDescription(e){
        this.setState({description: e.target.value})
    }
    handlePrice(e){
        this.setState({price: e.target.value})
    }
    handleClick(){
        let {name, description, price} = this.state;
        this.props.addStep1(name, description, price)
        console.log(this.state)
    }

    render(){
        // console.log('Step 1', this.state)
        return(
            <main>
                <h1>Step1</h1>
                <section className='step1-inputs'>
                    <h2>Product Name</h2>
                    <input onChange={this.handleName} value={this.state.name}></input>
                    <h2>Description</h2>
                    <textarea onChange={this.handleDescription} value={this.state.description}></textarea>
                    <h2>Price</h2>
                    <input onChange={this.handlePrice} value={this.state.price}></input>
                </section>
                <Link to='/designers'><button>Cancel</button></Link>
                <Link to='/step2'><button onClick={this.handleClick}>Next</button></Link>
            </main>
        )
    }
}

export default connect((state) => state, {addStep1, addStep2})(Step1);