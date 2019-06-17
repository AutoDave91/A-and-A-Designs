import React from 'react';
import {Switch, Route} from 'react-router-dom';

import DashBoard from './Components/Dashboard';
import Cart from './Components/Cart';
import April from './Components/April';
import Alexis from './Components/Alexis';
import Login from './Components/Login';

export default(
    <Switch>
        <Route exact path='/' component={DashBoard}></Route>
        <Route path='/april' component={April}></Route>
        <Route path='/alexis' component={Alexis}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/cart' component={Cart}></Route>
    </Switch>
)