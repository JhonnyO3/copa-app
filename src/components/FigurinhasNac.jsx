import React, { useState } from "react";
import { useEffect } from "react";
import { DivFigurinhas } from "../style/Styled";

const verificar = sessionStorage.getItem("usuario-validado")

export default function FigurinhasNac() {

    const [usuario, setUsuario] = useState({
        login: "",
        nome: "",
        senha: "",
        rm: ""
    })

    useEffect(() => {
        fetch(`http://localhost:8080/CopaApp/rest/login/${verificar}`).then((resp) => {
            return resp.json();
        }).then((resp) => {
            setUsuario(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })

    }, [])

    useEffect(() => {
        if (verificar == null) {
            window.location = "/"
        }
    }, [])

    return (
        <div>
            <DivFigurinhas>
                <h1>Olá <span>{usuario?.nome}</span> seja bem vindo a sua area!</h1>
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