import { createStore, combineReducers } from 'redux'
import liquiditypool from './reducers/liquiditypool'

const store = createStore(liquiditypool);

export default store;
