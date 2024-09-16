import { combineReducers } from "redux";
import reducers from "./reduxers"



const rootReducers = combineReducers({
    product:reducers
})


export default rootReducers