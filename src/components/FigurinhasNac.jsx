import React, { useState } from "react";
import { useEffect } from "react";
import { DivFigurinhas } from "../style/Styled";

const verificar = sessionStorage.getItem("usuario-validado")

export default function FigurinhasNac() {
    const verificar = sessionStorage.getItem("usuario-validado")
    const usuario = JSON.parse(sessionStorage.getItem("usuarioObject"))


    useEffect(() => {
        if (verificar == null) {
            window.location = "/"
        }
    }, [])

    return (
        <div>
            <DivFigurinhas>
                <h1>Olá <span>{usuario.nome}</span> seja bem vindo a sua area!</h1>
                <h3>Dados de login: {usuario.login}</h3>
                <h3>RM: {usuario.rm}</h3>
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