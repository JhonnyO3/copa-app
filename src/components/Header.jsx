
import React from "react";
import { Link } from "react-router-dom";
import { DivBody, DivFoooter, DivHeader, Divzero } from "../style/Styled";

export default function Header() {

    const logout = ()=>{
    sessionStorage.removeItem("usuario-validado")
    window.location = "/"
    }

    return(
        <DivBody>        
        <DivHeader>
            <h1>Figurinhas Copa </h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/figurinhas">Figurinhas</Link></li>
                <li className="liLogin"><Link to="/login" className="login">Login</Link></li>
            </ul>
       </DivHeader>
        </DivBody>
       
        
   
      


  
        

    )
}
