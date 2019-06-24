import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Axios from 'axios';

import {getUser, logout} from '../reducks/reducer';

class Header extends Component {
    constructor(){
        super()
        this.state={
            user: {}
        }
        // this.logout = this.logout.bind(this)
    }

    componentDidMount(){
        this.props.getUser()
    }

    render(){
        // console.log(this.state.user)
        // console.log(this.props)
        // console.log(this.state.user)
        return(
            <main className='header'>
                {/* <div className='space' /> */}

                {this.props.state.user.username ? (
                    <div>
                        <h1>Welcome {this.props.state.user.username}</h1>
                        <button onClick={this.props.logout}>Log out</button>
                    </div>
                    ) : (
                        <Link to='/login'><button>Login</button></Link>
                    )
                }
                <h1>A & A Designs</h1>
                <Link to='/cart'><button onClick={()=>{console.log(`send ${this.props.state.cart.cart} to ${this.props.state.user.cart}`)}}>Cart</button></Link>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        state
    }
}
export default connect(mapStateToProps, {getUser, logout})(Header);
// export default Header;