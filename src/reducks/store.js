import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';

import reducer from './reducer';
import wr from './wizardReducer';

const combinedReducers = combineReducers({reducer: reducer, wr: wr})

export default createStore(combinedReducers, applyMiddleware(promise));