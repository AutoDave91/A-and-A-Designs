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
        console.log(this.props)
        console.log(this.state.user)
        // console.log(this.props.customer)
        // console.log(this.state.inventory)
        // console.log(this.props.inventory)
        return(
            <main>
                <nav>
                    <Link to='/alexis'><button>Alexis</button></Link>
                    <Link to='/april'><button>April</button></Link>

                    {/* user features */}
                    {/* <Link to='/bookmarks'><button>Bookmarks</button></Link>
                    <Link to='/newsletter'><button>Newsletter</button></Link> */}

                    {/* if admin */}
                    {/* {console.log(this.props.admin)} */}
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
                    <h2>About</h2>
                    <p>About April and Alexis...</p>
                </section>
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