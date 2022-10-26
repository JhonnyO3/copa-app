import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginForm/>}/>       
       </Routes>

    )


}

