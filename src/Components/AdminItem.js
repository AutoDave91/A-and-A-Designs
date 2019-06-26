import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {startEditWizard} from '../reducks/wizardReducer';

class AdminItem extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }

    render(){
        // console.log(this.props)
        let {image, product_id, product_name, description, price, designer, ordered_amount} = this.props.item
        return(
            <main>
                <section className= "item-profile">
                    <img className = 'item-img' src={require(`../images/${image}.jpg`)} alt={product_name}/>
                    <h3>{product_name}</h3>
                    <h3 id='description'>{description}</h3>
                    <h3>${price}</h3>
                    <h3>{ordered_amount} ordered.</h3>
                    <section>
                    <Link to='/designer/step1'><button id='editItem' onClick={()=> this.props.startEditWizard(product_id, product_name, description, price, image, designer)}>Edit</button></Link>
                    <button id='deleteItem' onClick={()=>{this.props.removeItem(product_id)}}>Delete</button>
                    </section>
                </section>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        reducer: state.wr
    }
}
export default connect(mapStateToProps, {startEditWizard})(AdminItem);