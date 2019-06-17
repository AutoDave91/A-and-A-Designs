import React from 'react';
import {Link} from 'react-router-dom';

import Item from './Item';

function Alexis(){
    return(
        <main>
            <Link to='/april'><button>April</button></Link>
            <Link to='/'><button>Home</button></Link>
            <Link to='/bookmarks'><button>Bookmarks</button></Link>
            <Link to='/login'><button>Logout</button></Link>
            <h1>Alexis</h1>
            <Item />
        </main>
    )
}
export default Alexis;