import React from 'react';
import {Link} from 'react-router-dom';

function Step1(){
    return(
        <main>
            <h1>Step1</h1>
            <Link to='/designers'><button>Cancel</button></Link>
            <Link to='/step2'><button>Next</button></Link>
        </main>
    )
}
export default Step1;