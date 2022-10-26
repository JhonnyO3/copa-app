import React, { useEffect } from "react";
import { DivFigurinhas, DivHome } from "../style/Styled";


export default function FigurinhasInt(props) {
    const verificar = sessionStorage.getItem("usuario-validado")


    /*useEffect(() => {
        if (verificar == null) {
            window.location = "/"
        }
    }, [])*/

    return(
        <div>
        <DivFigurinhas>
            <h1>Olá {props.login} seja bem vindo a sua area!</h1>
            <p>Nessa página você tem acesso as top 10º figurinhas Internacionais do album da copa 2022!</p>


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