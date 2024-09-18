import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {CHANGE_POPUP,ADD_PRUDUCT,ADDD_CATEGORY} from "../../redux/action/index"
import WomanSvg from "../../assets/png/SVG/womenSvg"
import ManSvg from "../../assets/png/SVG/manSvg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from "../../assets/png/addImage.png"
import {getBase64} from "../convertImage/index"
import 'react-slideshow-image/dist/styles.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './style.css'


const AddProduct = ()=>{
    const [fillFirst,setFillFirst] = useState("#0008C1")
    const [fillSecond,setFillSecond] = useState("#939393")
    const [artikulName,setArtikuleName] = useState({artikul:"",name:""})
    const [avatarAdd,setAvatarAdd] = useState("")
    const [categoryMW,setCategoryMW] = useState("женский")
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
            setCategoryMW("женский")
        }
        if(text === "man"){
            setCategoryMW("мужской")
        }
    }
    const imageHandleMulitiple =(e)=>{
        getBase64(e.target.files[0],setAvatarAdd)
        
    }
    const handleInput = (e)=>{
        const {name,value} = e.target
        setArtikuleName({...artikulName,[name]:value})
    }

    console.log(artikulName,"555");
    
    return(
        <div className="common">
            <div>
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
                         fixedWidth : '9rem',
                         fixedHeight: '5rem',
                         gap        : '1rem',
                    }}>
                       {
                         product?.user?.map(item=>(
                            <SplideSlide>
                            <div className="categoryBox">
                                <img src={item.avatar}/>
                                <p>{item.category}</p>
                                <p>{item.id}</p>
                            </div>
                        </SplideSlide>
                        ))
                       }
                    </Splide>
                    </div>
                </div>
            </div>

            <div className="addProductData">
                <div className="addImageData">
                <div className="categoryImg" for="ImageFile">
                      <label htmlFor="ImageFile" > {
                        avatarAdd ? (
                            <div className="imgDiv">
                                <div>
                                    <img src={avatarAdd} className="addImage" />
                                </div>
                            </div>
                        ):(   
                            <div className="imgDiv">
                            <div>
                                <img src={Image} className="addImage" />
                                <p> загрузить<br/>
                                фото</p>
                            </div>
                        </div>
                        )
                      }
                      </label>
                      <input type="file" id="ImageFile" name="ImageFile" onChange={(e)=>imageHandleMulitiple(e)} />
                    </div>
                    
                </div>
                <div className="addProductName">
                    <div className="addInputs">
                       <input type="text" placeholder="Артикул" name="artikul" value={artikulName.artikul} onChange={(e)=>handleInput(e)}/>
                       <input type="text" placeholder="Цена " name="name" value={artikulName.name} onChange={(e)=>handleInput(e)}/>
                    </div>
                </div>
            </div>
            <div className="btnAddProduct">
                      <button>Добавить</button>
            </div>
            </div>
        </div>
    )
}


export default AddProduct