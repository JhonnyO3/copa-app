import React from "react";
import styled from "styled-components";






export const DivFigurinhas = styled.div`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
padding: 30px;
padding-top: 60px;
h1 {
   font-size: 70px;
   color: #FFF915;
}
p{
   font-size: 35px;
   color: white;
   max-width: 50%;
}

.alinhaCards {
   display: flex;
   background-color: #383838;
   color: black;
   margin-top: 30px;
   flex-wrap: wrap;
   max-width: 90%;
}
.cards{
   h2{
      text-align: center;
      padding-top: 20px;
      padding-bottom:20px ;
      padding: 40px;
   }
   background-color: #FFF915;
   padding-bottom: 100px;
   padding-left: 10px;
   margin: 15px;
   border-radius: 5px;
   p{
      font-size: 25px;
      color: black;
   }

   img{
      padding-top: 30px;
      max-width: 300px;
      margin: 0 auto;
      margin-left: 50px;
      padding-bottom: 40px;

   }
}




`

export const DivFlex = styled.div`
display: flex;

img {
   width: 600px;
   margin-left: 100px;
}
`
export const DivHome = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #383838;
color: white;
.principal{
   font-size: 20px;
   max-width: 45%;
   padding-top: 150px;
   margin-left: 100px;
   max-height: 100px;
   margin-top: 120px;

}
.principal button {
   color: black;
   padding: 15px;
   font-style: bold;
   font-size: 20px;
   background-color: #FFF915;
   border-radius: 10px;
   margin: 5px;
   border: 10px;
   margin-top: 30px;
}

.principal p {
   padding-top: 20px;
   font-size: 20px;
   margin-bottom: 10px;
   
}
.principal h1{
   color: #FFF915;
}
.alinhaCards {
   display: flex;
   background-color: #126E51;
   padding: 100px;
   border-radius: 10px;
   color: black;
}
.cards{
   h2{
      text-align: center;
      padding-top: 20px;
      padding-bottom:20px ;
   }
   background-color: #FFF915;
   padding-left: 10px;
   margin: 15px;
   border-radius: 5px;

   img{
      padding-top: 30px;
      max-width: 300px;
      margin: 0 auto;
      margin-left: 50px;
      padding-bottom: 40px;

   }


   
}

`




export const Config = styled.html`
*{
   margin: 0;
   padding: 0;
   border: 0;
}
`

export const DivBody = styled.body`
*{
   margin: 0;
   padding: 0;
   border: 0em;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

`
export const DivForm = styled.div`
background-color: #3549e1;
padding: 0;
margin: 0;
font-size: 30px;
text-align: right;
position: absolute;
width: 100%;

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


form{
   display: inline-block;
   position: relative;
   justify-content: right;
}
fieldset{
   background-color: #fff705;
   padding-top: 140px;
   padding-bottom: 478px;
   padding-left: 300px;
   padding-right: 200px;


}
input{


   margin-left: 20px;
   margin-top: 20px;
   border-radius: 20px;

   width: 400px;
   height: 50px;
}
label {
   color: black;
}
button {
   color: white;
   font-style: bold;
   font-size: 20px;
   width: 100%;
   background-color: #126E51;
   border-radius: 10px;
   margin: 5px;
   border: 10px;
}

`

export const DivFooter = styled.footer`

font-size: 20px;
padding-bottom: 0px;
background-color: #383838;
color: white;

div {
   padding-left: 3rem;
   
}

h1 {
   margin-top: 25px;
}

p {
   width: 30%;
   padding-top: 20px;
   

}
.direitos {
   bottom: 10px;
   width: 100%;
   text-align: center;
   padding-bottom: 0;

   
}

`

export const DivHeader = styled.header`
   padding: 20px;
   font-size: 1.5rem;
   background-color: #126E51 ;
   color: white;
   display: flex;
   justify-content: space-between;
   list-style: none;


   span{
      color: #FFF915;
   }

    ul{
      display: flex;
      
    }

    li {
      position: relative;
      display: inline;
      margin: 10px 20px 0 15px;
     
      
    }
     a {
      color: white;
      display: flex;
      justify-content: space-aroud;
      font-size: 25px;
      text-decoration: none;
    }
    .login {
      color: black;
      background-color: #FFF915;
      border-radius: 3px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 2px;
      padding-bottom: 2px;
    }

  
    
    `


