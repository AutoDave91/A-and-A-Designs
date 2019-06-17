import React from 'react';
import {Link} from 'react-router-dom';

import Item from './Item'

function Dashboard(){
    return(
        <main>
            <Link to='/alexis'><button>Alexis</button></Link>
            <Link to='/april'><button>April</button></Link>
            <Link to='/bookmarks'><button>Bookmarks</button></Link>
            <Link to='/newsletter'><button>Newsletter</button></Link>
            <Link to='/login'><button>Logout</button></Link>
            <h1>Home</h1>
            <Item />
            <section className='about'>
                <h2>About</h2>
                <p>About April and Alexis...</p>
            </section>
        </main>
    )
}
export default Dashboard;