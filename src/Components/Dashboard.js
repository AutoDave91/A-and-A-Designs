import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

import Item from './Item'

class Dashboard extends Component{
    constructor(){
        super()
        this.state ={
            inventory: [],
            user: {}
        }
    }
    componentDidMount(){
        Axios.get('/api/inventory').then(response=>
            this.setState({inventory: response.data}))
            .catch(()=> console.log('error at componentDidMount'))
    }

    render(){
        // console.log(this.state.inventory)
        return(
            <main>
                <nav>
                    <Link to='/alexis'><button>Alexis</button></Link>
                    <Link to='/april'><button>April</button></Link>
                    <Link to='/bookmarks'><button>Bookmarks</button></Link>
                    <Link to='/newsletter'><button>Newsletter</button></Link>
                    {/* if logged in */}
                    <button>Log out</button>
                    {/* if !logged in */}
                    <Link to='/login'><button>Login</button></Link>
                    {/* if admin */}
                    <Link to='/designer'><button>Admin</button></Link>
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
export default Dashboard;