import React from 'react';
import {Link} from 'react-router-dom';

import Item from './Item';

function Alexis(){
    return(
        <main>
            <nav>
                <Link to='/april'><button>April</button></Link>
                <Link to='/'><button>Home</button></Link>
                <Link to='/bookmarks'><button>Bookmarks</button></Link>
                    {/* if logged in */}
                    <button>Log out</button>
                    {/* if !logged in */}
                <Link to='/login'><button>Login</button></Link>
            </nav>
            <section>
                <h1>Alexis</h1>
                <Item />
            </section>
        </main>
    )
}
export default Alexis;