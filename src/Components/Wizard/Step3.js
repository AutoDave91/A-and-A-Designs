import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {completeWizard, startEditWizard, completeEditWizard} from '../../reducks/wizardReducer';

class Step3 extends Component{
    constructor(){
        super()
        this.state ={
            
        }
        this.onClick = this.onClick.bind(this)
        this.editClick = this.editClick.bind(this)
    }

    onClick(){
        let {product_name, description, price, image, designer} = this.props.reducer;
        this.props.completeWizard(product_name, description, price, image, designer)
    }
    editClick(){
        let {product_id, product_name, description, price, image, designer} = this.props.reducer;
        this.props.completeEditWizard(product_id, product_name, description, price, image, designer)
    }

    render(){
        console.log(this)
        console.log('Starting Step3', this.props.reducer.product_id, this.props.reducer.product_name, this.props.reducer.description, this.props.reducer.price, this.props.reducer.image, this.props.reducer.designer)

        {if(!this.props.auth.user || this.props.auth.user.admin !== true){
            return <Redirect to='/' />
            }}
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
                {this.props.reducer.product_id == 0 ? (
                <Link to='/designer'><button onClick={this.onClick}>Confirm New</button></Link>
                ) : (<Link to='/designer'><button onClick={this.editClick}>Confirm Edit</button></Link>)}
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{ reducer: state.wr, auth: state.reducer
    }
}
export default connect(mapStateToProps, {completeWizard, startEditWizard, completeEditWizard})(Step3);