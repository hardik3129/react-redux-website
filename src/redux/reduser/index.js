import { combineReducers } from "redux";
import productreduser from "./product.reduser";
import userapireduser from "./userapi.reduser";
import productSagaReducer from "./productSaga.reducer";

const rootreduser = combineReducers({
    productreduser,
    userapireduser,
    productSagaReducer
})

export default rootreduser