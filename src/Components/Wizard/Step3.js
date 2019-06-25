import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {completeWizard} from '../../reducks/wizardReducer';

class Step3 extends Component{
    constructor(){
        super()
        this.state ={
            
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        let {product_name, description, price, image, designer} = this.props.reducer;
        this.props.completeWizard(product_name, description, price, image, designer)
    }

    render(){
        console.log(this)
        // console.log('Starting Step3', this.props.product_name, this.props.description, this.props.price, this.props.image, this.props.designer)
        return(
            <main>
                <h1>Confirmation</h1>
                <img className = 'item-img' src={require(`../../images/${this.props.reducer.image}.jpg`)} alt={this.props.reducer.product_name}/>
                {/* <h3>{this.props.image}</h3> */}
                <h3>{this.props.reducer.product_name}</h3>
                <h3>{this.props.reducer.description}</h3>
                <h3>{this.props.reducer.price}</h3>
                <h3>Designer: {this.props.reducer.designer}</h3>
                <Link to='/designer/step2'><button>Back</button></Link>
                <Link to='/designer'><button onClick={this.onClick}>Confirm</button></Link>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{ reducer: state.wr
    }
}
export default connect(mapStateToProps, {completeWizard})(Step3);