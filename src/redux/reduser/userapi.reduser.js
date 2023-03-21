import { SETUSER } from "../constant"

const initialstate = {
    users : []
}

const userreduser = (state = initialstate, action) => {

    if (action.type === SETUSER) {
        return { ...state, users : action.payload}
    }
    
    return state
}

export default userreduser