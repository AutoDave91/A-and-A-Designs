import React, {Component} from 'react';
// import { connect } from 'react-redux';

// import {deleteItem} from '../reducks/reducer';

class AdminItem extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    
    render(){
        // console.log(this.props.item)
        return(
            <main>
                <section className= "item-profile">
                    <img className = 'item-img' src={require(`../images/${this.props.item.image}.jpg`)} alt={this.props.item.product_name}/>
                    <h3>{this.props.item.product_name}</h3>
                    <h3 id='description'>{this.props.item.description}</h3>
                    <h3>{this.props.item.price}</h3>
                    <h3>{this.props.item.ordered_amount} ordered.</h3>
                    <section>
                    <button id='editItem' onClick={()=> console.log(`edit item ${this.props.item.id}`)}>Edit</button>
                    <button id='deleteItem' onClick={()=> console.log(`delete item ${this.props.item.id}`)}>Delete</button>
                    </section>
                </section>
            </main>
        )
    }
}

// const mapStateToProps = state =>state;
// export default connect(mapStateToProps,{getUser, addToCart})(AdminItem);
export default AdminItem