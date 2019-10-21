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
    }

    componentDidMount(){
        Axios.get('/api/inventory')
            .then(response=>{
                this.setState({inventory: response.data})})
            .catch(()=> console.log('error at componentDidMount'))
        this.props.getUser()
    }

    render(){
        return(
            <main>
                <nav>
                    <Link to='/bows+bands'><button>Hair Bows & Bands</button></Link>
                    <Link to='/cloths'><button>Cloths & Accessories</button></Link>
                    {this.props.reducer.user.id ? (
                        <section className='user-buttons'>
                            <Link to='/profile'><button>Profile</button></Link>
                        </section>
                        ) : null
                    }
                    
                    {this.props.reducer.user.admin === true ? (
                        <Link to='/designer'><button>Admin</button></Link>
                        ) : null
                    }
                </nav>
                <section className='items'>
                    {this.state.inventory.map((item, index)=>(
                        <Item key={index} item={item} inventory={this.state.inventory}/>
                    ))}
                </section>
                <section className='about'>
                    <h2 className='line'>About April and Alexis...</h2>
                    <p className='line'>April and Alexis are sister-in-laws who both enjoy creating things in their spare time.</p>
                    <p className='line'>April is a NICU Respiratory Theripist at a Dallas hospital. She has a husband, David, and a daughter, Rylie. She enjoys creating pieces on her Cricket and sharing them with those around her.</p>
                    <p className='line'>Alexis is an Event Planner. She has a husband, Andrew, and a daughter, Ginny. She enjoys working in her craft room to create wonderful jewelry</p>
                    <p className='line'>David is a Web Developer. He is married to April and is the creator of this wonderful online store.</p>
                </section>
                <footer>
                    <a href='https://github.com/AutoDave91/A-and-A-Designs'>Github Repo</a>
                </footer>
            </main>
        )
    }
}

const mapStateToProps = state =>{
    return{
        reducer: state.reducer
    }
}
export default connect(mapStateToProps, {logout, getUser})(Dashboard);