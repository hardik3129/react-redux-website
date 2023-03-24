import { combineReducers } from "redux";
import productreduser from "./product.reduser";
import userreduser from "./userapi.reduser";
import productSagaReducer from "./productSaga.reducer";

const rootreduser = combineReducers({
    productreduser,
    userreduser,
    productSagaReducer
})

export default rootreduser