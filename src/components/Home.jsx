import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { DivFlex, DivHome } from "../style/Styled";
import neymar from "../img/neymar.png"

export default function Home() {
    return(
        <DivHome>
            <DivFlex>

            <div className="principal">
            <h1>O guia oficial Panini das figurinhas da copa!</h1>
            <p>Somos um site que trás em primeira mão todas as informações relevantes para você completar seu album da copa do mundo! </p>
            <p>Trazemos em primeira mão toda a coleção de figurinhas dos maiores jogadores do mundo, e também suas edições passadas!</p>
            <p>Veja só nosso guia!</p>
            <button>Guia de figurinhas</button>
            </div>

            <div className="imageNey">
                <img src={neymar} alt="" />
            </div>
            </DivFlex>

            <div className="alinhaCards">

            <div className="cards">
                <h2>Album da copa de 2022</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor necessitatibus cum magnam molestias fugit nemo sequi voluptate harum repellendus voluptatum accusamus provident vitae, deserunt voluptatibus sint at nobis iste.</p>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Album da copa de 2018</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor necessitatibus cum magnam molestias fugit nemo sequi voluptate harum repellendus voluptatum accusamus provident vitae, deserunt voluptatibus sint at nobis iste.</p>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Album da copa de 2014</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor necessitatibus cum magnam molestias fugit nemo sequi voluptate harum repellendus voluptatum accusamus provident vitae, deserunt voluptatibus sint at nobis iste.</p>
                <p><img src="" alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Album da copa de 2010</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor necessitatibus cum magnam molestias fugit nemo sequi voluptate harum repellendus voluptatum accusamus provident vitae, deserunt voluptatibus sint at nobis iste.</p>
                <p><img src="" alt="" srcset="" /></p>
            </div>

            </div>



            </DivHome>
 
       

        
        )
}