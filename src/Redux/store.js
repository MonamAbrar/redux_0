

import { createStore } from "redux";
import mainReducer from './Reducers/mainReducer';


const store = createStore(mainReducer);


// console.log(store.getState());

export default store;






