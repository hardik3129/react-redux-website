const initialstate = {
    users : []
}

const userapireduser = (state = initialstate, action) => {

    if (action.type === 'FETCH_DATA') {
        return { ...state, users : action.payload}
    }
    
    return state
}

export default userapireduser