import React from "react";
import { DivForm } from "../style/Styled";


export default function LoginForm() {



    return(
        <div>
            <DivForm>
                <form >
                <fieldset>
                    <div className="formulario">

                    <div>
                    <legend>Realize seu Login</legend>
                        <label>Login</label>
                        <input type="text" name="login" placeholder="   Login" />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" name="senha" placeholder="   Senha" />
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