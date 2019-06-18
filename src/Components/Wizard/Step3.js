import React from 'react';
import {Link} from 'react-router-dom';

function Step3(){
    return(
        <main>
            <h1>Step3</h1>
            <Link to='/step2'><button>Back</button></Link>
            <Link to='/'><button>Confirm</button></Link>
        </main>
    )
}
export default Step3;