import { createStore, applyMiddleware } from "redux";
import serviceReducer from './serviceReducer';
import thunk from "redux-thunk";

const store = createStore(serviceReducer, applyMiddleware(thunk));
export default store;