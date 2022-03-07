import { DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS } from "./actionType"


//DELETE_CART
export const delete_request = ()=>{
    return{
        type :DELETE_REQUEST
    }
}

export const delete_success = (payload)=>{
    console.log("dlt",payload)
    return{
        type : DELETE_SUCCESS,
        payload : payload
    }
}
export const delete_failure = ()=>{
    return{
        type : DELETE_FAILURE
    }
}