import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';

class Step3 extends Component{
    constructor(){
        super()
        this.state ={
            // productName: this.props.productName,
            // description: this.props.description,
            // price: this.props.price,
            // image: this.props.image,
            // designer: this.props.designer
        }
    }

    // componentDidMount(){

    // }

    render(){
        // let {productName, description, price, image, designer} = this.state;

        return(
            <main>
                <h1>Confirmation</h1>
                {/* <img src={image} alt={`${productName}`}/>
                <h3>Name: {productName}</h3>
                <h3>Description: {description}</h3>
                <h3>Price: {price}</h3>
                <h3>Designer: {designer}</h3> */}
                <Link to='/step2'><button>Back</button></Link>
                <Link to='/'><button>Confirm</button></Link>
            </main>
        )
    }
}
export default Step3;