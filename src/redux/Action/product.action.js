import { ADDPRODUCT, DELETEPRODUCT, EDITPRODUCT } from "../constant"

export const productaction = (data) => {
    return {
        type : ADDPRODUCT,
        payload : data
    }
}

export const deleteproduct = (data) => {
    return {
        type : DELETEPRODUCT,
        payload : data
    }
}

export const editproducts = (data) => {
    return {
        type : EDITPRODUCT,
        payload : data
    }
}