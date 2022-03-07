import {combineReducers} from "redux";
import {addReducer} from "./add/addreducer";
import {funReducer} from "./funtionality/funReducer"

export const rootReducer = combineReducers({
    add : addReducer,
    fun: funReducer,
   
})