import { SETUSER } from "../constant"

export const setUser = () => {
    
    return async (dispatch) => {
        const responce = await fetch ('https://dummyjson.com/users')
        const res = await responce.json()
        dispatch({
            type : SETUSER,
            payload : res.users
        })
    }
}