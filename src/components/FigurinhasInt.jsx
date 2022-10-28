import React, { useEffect, useState } from "react";
import { DivFigurinhas, DivHome } from "../style/Styled";
import cr7 from "../img/cr7.jpg"
import messi from "../img/messi.jpg"
import phil from "../img/phil.webp"
import seila from "../img/seila.jpg"
import neymarextra from "../img/neymarextra.webp"
import kamal from "../img/kamal.jpg"
import hasan from "../img/hasan.jpg"
import mbappe from "../img/mbappe.jpeg"
import mbappeNormal from "../img/mbappeNormal.jpg"
import neymar from "../img/neymar.png"




export default function FigurinhasInt() {
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
                <p>Nessa página você tem acesso as top 10º figurinhas Internacionais do album da copa 2022!</p>


                <div className="alinhaCards">
                    <div className="cards">
                        <h2>Cristiano Ronaldo</h2>
                        <p><img src={cr7} alt="" /></p>
                    </div>
                    <div className="cards">
                        <h2>Lionel Messi</h2>
                        <p><img src={messi} alt="" /></p>
                    </div>
                    <div className="cards">
                        <h2>Phil</h2>
                        <p><img src={phil} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <h2>Nome Figurinha</h2>
                        <p><img src={seila} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <h2>Neymar Jr Extra</h2>
                        <p><img src={neymarextra} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <h2>Kamal</h2>
                        <p><img src={kamal} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <h2>Hasan</h2>
                        <p><img src={hasan} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <h2>Mbappe Extra</h2>
                        <p><img src={mbappe} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <h2>Mbappe</h2>
                        <p><img src={mbappeNormal} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <h2>Neymar Jr</h2>
                        <p><img src={neymar} alt=""  /></p>
                    </div>
                </div>
            </DivFigurinhas>
        </div>
    )
}