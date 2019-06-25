import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

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
        // console.log(this.props.reducer)
        return(
            <main className='header'>
                {/* <div className='space' /> */}

                {this.props.reducer.user.username ? (
                    <div>
                        <h1>Welcome {this.props.reducer.user.username}</h1>
                        <button onClick={this.props.logout}>Log out</button>
                    </div>
                    ) : (
                        <Link to='/login'><button>Login</button></Link>
                        )
                    }
                <h1>A & A Designs</h1>
                {this.props.reducer.cart.cart !== undefined ? (
                    <div>
                        <Link to='/cart'><button onClick={()=>{console.log(`send ${this.props.reducer.cart.cart} to ${this.props.reducer.user.cart}`)}}>Cart</button></Link>
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