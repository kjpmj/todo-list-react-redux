import { createStore } from 'redux';
import todoReducer from '../reducers/reducer';

let store = createStore(todoReducer);

export default store;