import React from 'react';
import {Switch, Route} from 'react-router-dom';

import DashBoard from './Components/Dashboard';
import Cloths from './Components/Cloths';
import Jewelry from './Components/Jewelry';
import Login from './Components/Login';

// below is user only
import Cart from './Components/Cart';
import Profile from './Components/Profile';

// below is adminOnly
import AdminOnly from './Components/AdminOnly';
import Step1 from './Components/Wizard/Step1';
import Step2 from './Components/Wizard/Step2';
import Step3 from './Components/Wizard/Step3';
import Newsletter from './Components/Newsletter';

export default(
    <Switch>
        <Route exact path='/' component={DashBoard}></Route>
        <Route path='/cloths' component={Cloths}></Route>
        <Route path='/jewelry' component={Jewelry}></Route>
        <Route path='/login' component={Login}></Route>

        {/* below is user only */}
        <Route path='/cart' component={Cart}></Route>
        <Route path='/profile' component={Profile}></Route>

        {/* below is adminOnly */}
        <Route exact path='/designer' component={AdminOnly}></Route>
        <Route  path="/designer/step1" component={Step1}></Route>
        <Route  path="/designer/step2" component={Step2}></Route>
        <Route  path="/designer/step3" component={Step3}></Route>
        <Route path='/designer/newsletter' component={Newsletter}></Route>
    </Switch>
)