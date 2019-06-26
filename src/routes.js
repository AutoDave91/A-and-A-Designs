import React from 'react';
import {Switch, Route} from 'react-router-dom';

import DashBoard from './Components/Dashboard';
import Cart from './Components/Cart';
import April from './Components/April';
import Alexis from './Components/Alexis';
import Login from './Components/Login';
import AdminOnly from './Components/AdminOnly';
import Step1 from './Components/Wizard/Step1';
import Step2 from './Components/Wizard/Step2';
import Step3 from './Components/Wizard/Step3';

export default(
    <Switch>
        <Route exact path='/' component={DashBoard}></Route>
        <Route path='/april' component={April}></Route>
        <Route path='/alexis' component={Alexis}></Route>
        <Route path='/login' component={Login}></Route>

        {/* below is user only */}
        <Route path='/cart' component={Cart}></Route>

        {/* below is adminOnly */}
        <Route exact path='/designer' component={AdminOnly}></Route>
        <Route  path="/designer/step1" component={Step1}></Route>
        <Route  path="/designer/step2" component={Step2}></Route>
        <Route  path="/designer/step3" component={Step3}></Route>
    </Switch>
)