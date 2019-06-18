import React from 'react';

import Item from './Item';
import {Link} from 'react-router-dom';

function April(){
    return(
        <main>
            <Link to='/alexis'><button>Alexis</button></Link>
            <Link to='/'><button>Home</button></Link>
            <Link to='/bookmarks'><button>Bookmarks</button></Link>
                {/* if logged in */}
                <button>Log out</button>
                {/* if !logged in */}
            <Link to='/login'><button>Login</button></Link>
            <h1>April</h1>
            <Item />
        </main>
    )
}
export default April;