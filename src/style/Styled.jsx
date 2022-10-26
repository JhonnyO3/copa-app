import React from "react";
import styled from "styled-components";


export const DivHome = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

.principal{
   font-size: 20px;
   text-align: center;
   padding-top: 20px;
}
.principal p {
   padding-top: 20px;
}
.alinhaCards {
   display: flex;
   background-color: #126E51;
   padding: 100px;
   border-radius: 10px;
}
.cards{
   h2{
      text-align: center;
   }
   background-color: #FFF915;
   padding-left: 10px;
   margin: 15px;
   border-radius: 5px;


   
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
padding-bottom: 200px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


form{
   display: inline-block;
   position: relative;
   justify-content: right;
}
fieldset{
   background-color: #FFF915;
   padding-top: 140px;
   padding-bottom: 290px;
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
position: absolute;
bottom: 0px;
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


