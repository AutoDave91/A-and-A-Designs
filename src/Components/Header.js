import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <main className='header'>
            <div className='space' />
            <h1>A & A Designs</h1>
            <Link to='/cart'><button>Cart</button></Link>
        </main>
    )
}
export default Header;