import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <main className='header'>
                <div className='space' />
                
                <h1>A & A Designs</h1>
                <Link to='/cart'><button>Cart</button></Link>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        state
    }
}
export default connect(mapStateToProps)(Header);
// export default Header;