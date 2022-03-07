import { Fab } from "@mui/material"
import { DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS} from "./actionType"

const initState = {
    cart : [],
    isLoading : false,
    isError : false

}
export const funReducer = (state=initState,{type,payload})=>{
    switch(type){
       

            //DELETE
            case DELETE_REQUEST :
                return {
                    ...state,
                    isLoading : true,
                    isError : false
                }
            case DELETE_SUCCESS : 
                return {
                    ...state,
                    isLoading : false,
                    isError : false,
                    cart : state.cart.filter((item)=>{
                        return(
                                item.id!==payload
                        )
                    })
                }
            case DELETE_FAILURE :
                return {
                    ...state,
                    isLoading : false,
                    isError : true
                }
        default :
            return state
    }

}