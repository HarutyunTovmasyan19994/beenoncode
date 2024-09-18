import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {CHANGE_POPUP,ADD_PRUDUCT,ADDD_CATEGORY} from "../../redux/action/index"
import WomanSvg from "../../assets/png/SVG/womenSvg"
import ManSvg from "../../assets/png/SVG/manSvg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {getCategoryies} from "../../redux/action/action"
import 'react-slideshow-image/dist/styles.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './style.css'


const AddProduct = ()=>{
    const [fillFirst,setFillFirst] = useState("#0008C1")
    const [fillSecond,setFillSecond] = useState("#939393")
    const [fillFirstMan,setFillFirstMan] = useState("#0008C1")
    const [fillSecondWom,setFillSecondWom] = useState("#939393")
    const [avatar,setAvatar] = useState("")
    const [categoryMW,setCategoryMW] = useState("женский")
    const [category,setCategory] = useState("")
    const product = useSelector(state=>state.product)
    
    const dispatch = useDispatch()

    const handleSvg = (text)=>{
        if(text === "woman"){
            setFillFirst("#0008C1")
            setFillSecond("#939393")
        }
        if(text === "man"){
            setFillSecond("#0008C1")
            setFillFirst("#939393")
        }
    }
    const handlecateSvg = (text)=>{
        if(text === "woman"){
            setFillFirstMan("#0008C1")
            setFillSecondWom("#939393")
            setCategoryMW("женский")
        }
        if(text === "man"){
            setFillSecondWom("#0008C1")
            setFillFirstMan("#939393")
            setCategoryMW("мужской")
        }
    }
    console.log(product);
    
    return(
        <div className="headerApp">
                <div className="iconsDiv">
                    <div className="womanSvg" onClick={()=>handleSvg("woman")}>
                        <WomanSvg fill={fillFirst}/>
                    </div>
                    <div className="manSvg" onClick={()=>handleSvg("man")}>
                        <ManSvg fill={fillSecond}/>
                    </div>
                </div>
                <div className="boxes">
                    <div>
                    <Splide aria-label="prev" options={{
                         fixedWidth : '10rem',
                         fixedHeight: '6rem',
                         gap        : '2rem',
                    }}>
                       {
                         product?.user?.map(item=>(
                            <SplideSlide>
                            <div className="categoryBox">
                                <img src={item.avatar}/>
                                <p>{item.category}</p>
                            </div>
                        </SplideSlide>
                        ))
                       }
                    </Splide>
                    </div>
                </div>
                <div className="btnDiv">
                    <button className="btnAdd" onClick={()=>dispatch({type:CHANGE_POPUP,payload:true})}>+</button>
                </div>
            </div>
        
    )
}


export default AddProduct