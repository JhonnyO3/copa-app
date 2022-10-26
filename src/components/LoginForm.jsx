import React from "react";
import { useState } from "react";
import { DivForm } from "../style/Styled";
import FigurinhasInt from "./FigurinhasInt";
import FigurinhasNac from "./FigurinhasNac";


export default function LoginForm() {

    const [usuario, setUsuario] = useState({
        login: "",
        nome: "",
        senha: "",
        rm: "",
    })

    const handleChange = e => {
        setUsuario({...usuario, [e.target.name]:e.target.value })
    }
    const logar = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(usuario)
        }
        const response = await fetch(
            "http://localhost:8080/CopaApp/rest/login", 
            requestOptions
            )

            const data = await response.json()

            if(data.login){
                sessionStorage.setItem("usuario-validado", data.login)
                usuario.nome = data.nome
                usuario.rm = data.rm
                console.log(usuario)
            }

            if (data) {
                window.location = "/figurinhasNacionais"
            }else {
                window.location = "/login"
                console.log("Login ou senha invalidos")
            }
        }



    return(
        <div>
            <DivForm>
                <form onSubmit={logar} >
                <fieldset>
                    <div className="formulario">

                    <div>
                    <legend>Realize seu Login</legend>
                        <label>Login</label>
                        <input 
                        type="text" 
                        name="login" 
                        placeholder="   Login" 
                        value={usuario.login} 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password"
                         name="senha"
                          placeholder="   Senha"
                           value={usuario.senha}
                           onChange={handleChange} />
                    </div>
                    <div>
                        <button>Enviar</button>
                    </div>
                    </div>
                </fieldset>
                </form>

            </DivForm>
        </div>
        
       


    )
}