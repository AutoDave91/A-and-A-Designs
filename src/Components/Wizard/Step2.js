import React from 'react';
import {Link} from 'react-router-dom';

function Step2(){
    return(
        <main>
            <h1>Step2</h1>
            <Link to='/step2'><button>Back</button></Link>
            <Link to='/step3'><button>Next</button></Link>
        </main>
    )
}
export default Step2;