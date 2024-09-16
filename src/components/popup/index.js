import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {CHANGE_POPUP} from "../../redux/action/index"
import "./style.css"


const Modal = ({children})=>{
    const {product} = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(product.popup)
    return(
        <div className={product.popup ? "modal active" : "modal"} onClick={()=>dispatch({type:CHANGE_POPUP,payload:false})}>
            <div className={product.popup ? "modal__context active" : "modal__context"} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal