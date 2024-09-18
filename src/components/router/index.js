import React from "react";
import { Route,Routes } from "react-router";
import Header from "../header";
import AddProduct from "../add";


const RouterApp = () =>{
    return(
        <div>
        <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/addProduct" element={<AddProduct/>}/>
        </Routes>
        </div>
    )
}


export default RouterApp