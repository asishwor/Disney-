import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    a{
        color: initial;
        text-decoration: initial;
        &:hover{
            
        }
    }
    ul{
        list-style: none;

    }
   body{
    line-height: 1.7em;
    }

`;
