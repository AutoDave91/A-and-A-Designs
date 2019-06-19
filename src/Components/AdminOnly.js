import React from 'react';
import {Link} from 'react-router-dom';

function AdminOnly(){
    return(
        <main>
            <header>
                <Link to='/'><button>Home</button></Link>
                <Link to='/designer/step1'><button>Add Item</button></Link>
                <h1>Welcome -insert designer here-</h1>
            </header>
            <section className='admin-container'>
                <h2 className='admin-elements'>Orders</h2>
                <h2 className='admin-elements'>Popular Items</h2>
            </section>
        </main>
    )
}
export default AdminOnly;