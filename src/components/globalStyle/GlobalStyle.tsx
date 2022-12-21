import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap');
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
    color: #fff;
    font-family: source-code-pro;
    font-family: 'Source Code Pro', monospace;
    background-color: #040714;
    font-weight:400;    }

`;
