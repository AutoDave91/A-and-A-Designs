import React from 'react';

import {Link} from 'react-router-dom';

function Cart(){
    return(
        <main>
            <Link to='/'><button>Home</button></Link>
            <h1>Cart</h1>
        </main>
    )
}
export default Cart;