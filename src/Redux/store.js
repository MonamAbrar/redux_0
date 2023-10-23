
// Step 4 - Create the store based on the reducers
import { createStore } from "redux";
import mainReducer from './Reducers/mainReducer';

import {composeWithDevTools} from 'redux-devtools-extension'


// const store = createStore(mainReducer)
const store = createStore(mainReducer, composeWithDevTools());


// console.log(store.getState());

export default store;






