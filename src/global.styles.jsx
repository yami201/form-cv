// importing createGlobalStyle because we need to give the app some styles
import { createGlobalStyle } from "styled-components";

// creating our GlobalStyle that we will give to our app
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: white;
        height: 100vh;
        display: flex;
        justify-content: center;
        font-family: sans-serif;
    }
    input,button{
        background-color: unset;
        border: none;
        outline: none;
    }
    textarea{
        font-family: sans-serif;
    }
    input[type=date]{
        resize: none;
    }
    li{
        list-style: none;
    }
`

