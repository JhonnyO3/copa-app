import React from "react";
import { useEffect } from "react";
import { DivFigurinhas, DivHome } from "../style/Styled";
import Footer from "./Footer";

const verificar = sessionStorage.getItem("usuario-validado")
const usuario = sessionStorage.getItem("usuario-validado")



export default props => {
    console.log(props.login)

 /*   useEffect(() => {
        if (verificar == null) {
            window.location = "/"
        }
    }, [])*/

    return (
        <div>
            <DivFigurinhas>
                <h1>Olá {props.login} seja bem vindo a sua area!</h1>
                <p>Nessa página você tem acesso as top 10º figurinhas Nacionais do album da copa 2022!</p>
                <div className="alinhaCards">
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Nome Figurinha</h2>
                <p><img src="" alt="" srcset="" /></p>
            </div>
        </div>
            </DivFigurinhas>
        </div>



    )
}