import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {addStep2} from '../../reducks/reducer';

class Step2 extends Component{
    constructor(){
        super()
        this.state ={
            image: '',
            designer: ''
        }
        this.handleImage = this.handleImage.bind(this)
        this.handleDesigner = this.handleDesigner.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

   handleImage(e){
        this.setState({image: e.target.image})
    }
    handleDesigner(e){
        this.setState({designer: e.target.designer})
    }
    handleClick(){
        let {image, designer} = this.state
        this.props.addStep2(image, designer)
    }

    render(){
        return(
            <main>
                <h1>Step2</h1>
                <section className='step2-inputs'>
                    <h2>image</h2>
                    <input onChange={this.handleImage} value={this.state.image}></input>
                    <h2>Designer</h2>
                    <input onChange={this.handleDesigner} value={this.state.designer}></input>
                </section>
                <Link to='/step1'><button>Back</button></Link>
                <Link to='/step3'><button onClick={this.handleClick}>Next</button></Link>
            </main>
        )
    }
}

export default connect((state)=>state, {addStep2})(Step2);