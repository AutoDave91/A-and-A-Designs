import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Step3 extends Component{
    constructor(){
        super()
        this.state ={
            
        }
    }

    onClick(){
        let {completeWizard, product_name, description, price, image, designer} = this.props;
        completeWizard(product_name, description, price, image, designer)
    }

    render(){
        console.log('Starting Step3', this.props.product_name, this.props.description, this.props.price, this.props.image, this.props.designer)
        return(
            <main>
                <h1>Confirmation</h1>
                <img className = 'item-img' src={require(`../../images/${this.props.image}.jpg`)} alt={this.props.product_name}/>
                {/* <h3>{this.props.image}</h3> */}
                <h3>{this.props.product_name}</h3>
                <h3>{this.props.description}</h3>
                <h3>{this.props.price}</h3>
                <h3>Designer: {this.props.designer}</h3>
                <Link to='/designer/step2'><button>Back</button></Link>
                <Link to='/designer'><button onClick={this.onClick}>Confirm</button></Link>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        image: state.image,
        product_name: state.product_name,
        description: state.description,
        price: state.price,
        designer: state.designer
    }
}
export default connect(mapStateToProps)(Step3);