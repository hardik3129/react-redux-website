const initialstate = {
    ProductData : []
}

const productSagaReducer = (state = initialstate, action) => {

    
    if (action.type === 'GET_PRODUCT_DATA') {
        return { ...state, ProductData : action.payload }
    }
    
    return state
} 

export default productSagaReducer