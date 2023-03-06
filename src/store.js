import { createStore } from "redux";
import rootreduser from "./redux/reduser";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootreduser, composeWithDevTools())

export default store