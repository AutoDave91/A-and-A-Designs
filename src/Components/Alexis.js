import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

import Item from './Item';

class Alexis extends Component {
    constructor(){
        super()
        this.state ={
            inventory: []
        }
    }

    componentDidMount(){
        Axios.get('/api/alexis').then(response=>
            this.setState({properties: response.data}))
            .catch(()=>console.log('DidMount failed in Alexis'))
    }

    render(){
        return(
            <main>
                <nav>
                    <Link to='/april'><button>April</button></Link>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/bookmarks'><button>Bookmarks</button></Link>
                        {/* if logged in */}
                        <button>Log out</button>
                        {/* if !logged in */}
                    <Link to='/login'><button>Login</button></Link>
                </nav>
                <section>
                    <h1>Alexis</h1>
                    {this.state.inventory.map((item, index)=>(
                        <Item key={index} item={item} inventory={this.state.inventory}/>
                    ))}
                </section>
            </main>
        )
    }
}
export default Alexis;