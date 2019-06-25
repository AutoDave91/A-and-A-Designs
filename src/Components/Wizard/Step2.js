import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {handleImage, handleDesigner} from '../../reducks/wizardReducer';

class Step2 extends Component{
    constructor(){
        super()
        this.state ={
            image: '',
            designer: ''
        }
        this.handleImage = this.handleImage.bind(this)
        this.handleDesigner = this.handleDesigner.bind(this)
    }

   handleImage(e){
        this.props.handleImage(e.target.value)
    }
    handleDesigner(e){
        this.props.handleDesigner(e.target.value)
    }

    render(){
        console.log('Starting Step2', this.props.product_name, this.props.description, this.props.price)
        return(
            <main>
                <h1>Step2</h1>
                <section className='step2-inputs'>
                    <h2>image</h2>
                    <input onChange={this.handleImage} value={this.props.image}></input>
                    <h2>Designer</h2>
                    <input onChange={this.handleDesigner} value={this.props.designer}></input>
                </section>
                <Link to='/designer/step1'><button>Back</button></Link>
                <Link to='/designer/step3'><button onClick={this.handleClick}>Next</button></Link>
            </main>
        )
    }
}

export default connect((state)=>state, {handleImage, handleDesigner})(Step2);