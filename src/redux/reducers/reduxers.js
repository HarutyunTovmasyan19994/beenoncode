import {CHANGE_POPUP,CHANGE_CATEMANWOM,ADD_PRUDUCT,ADDD_CATEGORY} from "../action/index"

const defaultState = {
    product:{},
    categories:[],
    popup:false,
    cagetMan:false,
    cagetWon:true   
}



const reducers = (state = defaultState,action)=>{
    switch(action.type){
        case ADDD_CATEGORY:
            return {categories:[...state.categories,action.payload]}
        case CHANGE_POPUP:
            return {...state.popup,popup:action.payload}
        case CHANGE_CATEMANWOM:
            return {...state.cagetMan,cagetMan:action.payload}
        case ADD_PRUDUCT:
            return {...state,product:action.payload}
        
        default:
            return state
    }
}


export default reducers