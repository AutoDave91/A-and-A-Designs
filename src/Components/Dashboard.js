import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Axios from 'axios';

import Item from './Item';
import {logout, getUser} from '../reducks/reducer';

class Dashboard extends Component{
    constructor(){
        super()
        this.state ={
            inventory: [],
            user: {}
        }
        this.logout = this.logout.bind(this)
    }

    componentDidMount(){
        Axios.get('/api/inventory')
            .then(response=>{
                this.setState({inventory: response.data})})
            .catch(()=> console.log('error at componentDidMount'))
        this.props.getUser()
    }
    logout(){
        this.props.logout()
    }

    render(){
        // console.log(this.state.inventory)
        console.log(this.props)
        console.log(this.state.user)
        return(
            <main>
                {this.props.username ? (
                    <div>
                        <h1>Welcome {this.props.username}</h1>
                        <button onClick={this.logout}>Log out</button>
                    </div>
                    ) : (
                        <Link to='/login'><button>Login</button></Link>
                    )
                }
                <nav>

                    <Link to='/alexis'><button>Alexis</button></Link>
                    <Link to='/april'><button>April</button></Link>

                    {/* user features */}
                    {/* <Link to='/bookmarks'><button>Bookmarks</button></Link>
                    <Link to='/newsletter'><button>Newsletter</button></Link> */}
                    {/* if admin */}
                    {console.log(this.props.admin)}
                    {this.props.admin === true ? (
                        <Link to='/designer'><button>Admin</button></Link>
                        ) : null
                    }
                </nav>
                <section className='items'>
                    {/* <h1>Home</h1> */}
                    {this.state.inventory.map((item, index)=>(
                        <Item key={index} item={item} inventory={this.state.inventory}/>
                    ))}
                </section>
                <section className='about'>
                    <h2>About</h2>
                    <p>About April and Alexis...</p>
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
export default connect(mapStateToProps, {logout, getUser})(Dashboard);