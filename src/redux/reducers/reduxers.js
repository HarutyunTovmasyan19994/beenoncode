import {CHANGE_POPUP,CHANGE_CATEMANWOM,ADD_PRUDUCT,ADDD_CATEGORY} from "../action/index"

const defaultState = {
    product:{},
    user:[],
    popup:false,
    cagetMan:false,
    cagetWon:true   
}



const reducers = (state = defaultState,action)=>{
    switch(action.type){
        case CHANGE_POPUP:
            return {...state,popup:action.payload}
        case CHANGE_CATEMANWOM:
            return {...state,cagetMan:action.payload}
        case ADD_PRUDUCT:
            return {...state,product:action.payload}
        case ADDD_CATEGORY:
            return {...state,user:[...state.user,action.payload]}
        default:
            return state
    }
}


export default reducers