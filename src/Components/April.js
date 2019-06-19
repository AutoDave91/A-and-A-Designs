import React, {Component} from 'react';
import Axios from 'axios';

import Item from './Item';
import {Link} from 'react-router-dom';

class April extends Component{
    constructor(){
        super()
        this.state ={
            inventory: []
        }
    }

    componentDidMount(){
        Axios.get('/api/april').then(response=>
            this.setState({inventory: response.data}))
            .catch(()=> console.log('error at componentDidMount'))
    }

    render(){
        return(
            <main>
                <nav>
                    <Link to='/alexis'><button>Alexis</button></Link>
                    <Link to='/'><button>Home</button></Link>
                    {/* <Link to='/bookmarks'><button>Bookmarks</button></Link> */}
                        {/* if logged in */}
                        {/* <button>Log out</button> */}
                        {/* if !logged in */}
                    <Link to='/login'><button>Login</button></Link>
                </nav>
                <section>
                    <h1>April</h1>
                    <section className='items'>
                        {this.state.inventory.map((item, index)=>(
                            <Item key={index} item={item} inventory={this.state.inventory}/>
                        ))}
                    </section>
                </section>
            </main>
        )
    }
}
export default April;