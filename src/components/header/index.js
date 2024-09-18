import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {CHANGE_POPUP,ADD_PRUDUCT,ADDD_CATEGORY} from "../../redux/action/index"
import WomanSvg from "../../assets/png/SVG/womenSvg"
import ManSvg from "../../assets/png/SVG/manSvg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from "../../assets/png/addImage.png"
import {getBase64} from "../convertImage/index"
import Modal from "../popup/index"
import CloseImg from "../../assets/png/Group.png"
import { useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './style.css'



const Header = () =>{
    const [fillFirst,setFillFirst] = useState("#0008C1")
    const [fillSecond,setFillSecond] = useState("#939393")
    const [fillFirstMan,setFillFirstMan] = useState("#0008C1")
    const [fillSecondWom,setFillSecondWom] = useState("#939393")
    const [avatar,setAvatar] = useState("")
    const [categoryMW,setCategoryMW] = useState("женский")
    const [category,setCategory] = useState("")
    const product = useSelector(state=>state.product)
    const dispatch = useDispatch()

    const navigate = useNavigate()

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

    const imageHandle =(e)=>{
        console.log(e);
        getBase64(e.target.files[0],setAvatar)
        
    }
    const id = new Date().getTime()
    console.log(id)
    const handleAdd =()=>{
        if(categoryMW === "женский"){
             dispatch({type:ADD_PRUDUCT,payload:{dataMW:{categoryMW}}})
             dispatch({type:ADDD_CATEGORY,payload:{avatar,category}})
             setCategory("")
             dispatch({type:CHANGE_POPUP,payload:"false"})
             navigate("/addProduct") 
        }
        if(categoryMW === "мужской"){
            dispatch({type:ADD_PRUDUCT,payload:{dataMW:{categoryMW}}})
            dispatch({type:ADDD_CATEGORY,payload:{id,avatar,category,}})
            setCategory("")
            dispatch({type:CHANGE_POPUP,payload:"false"})
            navigate("/addProduct") 
       }
    }
    console.log(product);
    

    return(
        <>  
         <div className="header">
            <Modal>
                <div className="addCategory">
                    <div className="addCategoryAdd">
                        <p>добавить категория</p>
                        <img src={CloseImg}/>
                    </div>
                    <div className="categorymanWoman"> 
                        <div className="categoryWoman" onClick={()=>handlecateSvg("woman")}>
                            <WomanSvg fill={fillFirstMan} />
                            <p>женский</p>
                        </div>
                        <div className="categoryMan" onClick={()=>handlecateSvg("man")}>
                            <ManSvg fill={fillSecondWom}/>
                            <p>мужской</p>
                        </div>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="категория" className="categInput" onChange={(e)=>setCategory(e.target.value)}/>
                    </div>
                    <div className="categoryImg" for="ImageFile">
                      <label htmlFor="ImageFile" > {
                        avatar ? (
                            <div className="imgDiv">
                                <div>
                                    <img src={avatar} className="addImage" />
                                </div>
                            </div>
                        ):(  
                            <div className="imgDiv">
                            <div>
                                <img src={avatar} className="addImage" />
                                <p> загрузить<br/>
                                фото</p>
                            </div>
                        </div>
                        )
                      }
                      </label>
                      <input type="file" id="ImageFile" name="ImageFile" onChange={(e)=>imageHandle(e)}/>
                    </div>
                </div>
                <div className="addBtn">
                    <button onClick={handleAdd}>
                    Добавить
                    </button>
                </div>
            </Modal>
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
                         gap        : '1rem',
                    }}>
                       {
                         product.uesr?.map(item=>(
                            <SplideSlide>
                            <div className="categoryBox">
                                <img src={item.avatar}/>
                                <p>{item.category}</p>
                            </div>5
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
        </div>
        
        </>
    )
}

export default Header


