import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {handleName, handleDescription, handlePrice} from '../../reducks/wizardReducer';

class Step1 extends Component{
    constructor(){
        super()
        this.state ={
        }
        this.handleName = this.handleName.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
    }
    
    handleName(e){
        this.props.handleName(e.target.value)
    }
    handleDescription(e){
        this.props.handleDescription(e.target.value)
    }
    handlePrice(e){
        this.props.handlePrice(e.target.value)
    }

    render(){
        // console.log('Step 1', this.state)
        {if(!this.props.auth.user || this.props.auth.user.admin !== true){
            return <Redirect to='/' />
            }}
        return(
            <main className='step1'>
                <h1>Step1</h1>
                <section className='step1-inputs'>
                    <h2>Product Name</h2>
                    <input onChange={this.handleName} value={this.props.reducer.product_name}></input>
                    <h2>Description</h2>
                    <textarea onChange={this.handleDescription} value={this.props.reducer.description}></textarea>
                    <h2>Price</h2>
                    <input onChange={this.handlePrice} value={this.props.reducer.price}></input>
                </section>
                <Link to='/designer'><button>Cancel</button></Link>
                <Link to='/designer/step2'><button>Next</button></Link>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{ reducer: state.wr, auth: state.reducer
    }
}
export default connect(mapStateToProps, {handleName, handleDescription, handlePrice})(Step1);