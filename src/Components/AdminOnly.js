import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AdminOnly extends Component {
    constructor(){
        super()
        this.state ={

        }
    }

    render(){
        return(
            <main>
                <header>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/designer/step1'><button>Add Item</button></Link>
                    <h1>Welcome {this.props.username}. How may I assist you?</h1>
                </header>
                <section className='admin-container'>
                    <h2 className='admin-elements'>Orders</h2>
                    <h2 className='admin-elements'>Popular Items</h2>
                </section>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        username: state.username
    }
}
export default connect(mapStateToProps)(AdminOnly);