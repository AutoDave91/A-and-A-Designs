import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {getUser, logout} from '../reducks/reducer';

class Header extends Component {
    constructor(){
        super()
        this.state={
            user: {},
            toggle: false
        }
    }

    componentDidMount(){
        this.props.getUser()
    }

    render(){
        // console.log(this.state)
        // console.log(this.props.reducer)
        return(
            <main className='header'>
                {this.props.reducer.user.username ? (
                    <div className='logged-in'>
                        <h1 className='welcome'>Welcome {this.props.reducer.user.first_name}</h1>
                        <Link to='/'><button className='welcome-button' onClick={this.props.logout}>Log out</button></Link>
                    </div>
                    ) : (<div className='logged-out'>
                            <Link to='/login'><button >Login</button></Link>
                        </div>
                        )
                    }
                <h1 className='title'>A + A Designs</h1>
                {this.props.reducer.cart.cart !== undefined ? (
                    <div className='space'>
                        <Link to='/cart'><button>Cart</button></Link>
                    </div>
                    ) : <div className='space' />}
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        reducer: state.reducer
    }
}
export default connect(mapStateToProps, {getUser, logout})(Header);
// export default Header;