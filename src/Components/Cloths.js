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
        Axios.get('/api/cloths').then(response=>
            this.setState({inventory: response.data}))
            .catch(()=> console.log('error at componentDidMount'))
    }

    render(){
        return(
            <main>
                <nav>
                    <Link to='/bows+bands'><button>Hair Bows & Bands</button></Link>
                    <Link to='/'><button>Home</button></Link>
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