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
        Axios.get('/api/bows&bands').then(response=>
            this.setState({inventory: response.data}))
            .catch(()=>console.log('DidMount failed in Alexis'))
    }

    render(){
        return(
            <main>
                <nav>
                    <Link to='/cloths'><button>Cloths & Accessories</button></Link>
                    <Link to='/'><button>Home</button></Link>
                </nav>
                <section>
                    <h1>Alexis</h1>
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
export default Alexis;