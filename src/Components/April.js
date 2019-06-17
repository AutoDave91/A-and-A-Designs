import React from 'react';

import Item from './Item';
import {Link} from 'react-router-dom';

function April(){
    return(
        <main>
            <Link to='/alexis'><button>Alexis</button></Link>
            <Link to='/'><button>Home</button></Link>
            <Link to='/bookmarks'><button>Bookmarks</button></Link>
            <Link to='/login'><button>Logout</button></Link>
            <h1>April</h1>
            <Item />
        </main>
    )
}
export default April;