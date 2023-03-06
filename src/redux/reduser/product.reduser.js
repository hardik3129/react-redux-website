import { ADDPRODUCT, DELETEPRODUCT, EDITPRODUCT } from "../constant"

const initialstate = {
    product : []
}

const productreduser = (state = initialstate, action) => {

    if (action.type === ADDPRODUCT) {
        return {...state, product : [...state.product, action.payload]}
    }

    if (action.type === DELETEPRODUCT) {
        return {...state, product : state.product.filter((i) => i.id !== action.payload)}
    }

    if (action.type === EDITPRODUCT) {
        const editvalue = state.product.map((i) => {
            if (i.id === action.payload.id) {
                i = action.payload
            }
            return i
        })
        return {...state, product : editvalue}
    }
    
    return state
}

export default productreduser