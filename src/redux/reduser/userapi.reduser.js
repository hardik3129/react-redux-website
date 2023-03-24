const initialstate = {
    users : []
}

const userreduser = (state = initialstate, action) => {

    if (action.type === 'FETCH_DATA') {
        return { ...state, users : action.payload}
    }
    
    return state
}

export default userreduser