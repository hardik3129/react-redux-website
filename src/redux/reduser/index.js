import { combineReducers } from "redux";
import productreduser from "./product.reduser";
import userreduser from "./userapi.reduser";

const rootreduser = combineReducers({
    productreduser,
    userreduser
})

export default rootreduser