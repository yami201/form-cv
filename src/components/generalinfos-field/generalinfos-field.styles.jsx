import styled from "styled-components";


// as said in the component file , the FileInput is a styled label 
export const FileInput = styled.label`
    width: 350px;
    display: block;
    margin-left: 10px;
    margin-top: 20px;
    height: 41px;
    position: relative;
    border-radius: 50px;
    cursor: pointer;
    svg{
        width: 50px;
        height: 41px;
        position: absolute;
        right: 0px;
        border-radius: 0 50px 50px 0;
        color: #1DA1F2;
        background-color: #c9c9c9;
    }
    span{
        position: absolute;
        left: 0;
        width: 300px;
        height: 41px;
        border-radius: 50px 0 0 50px;
        box-shadow: inset 6px 6px 6px #d1cecb,
                inset -6px -6px 6px white;
        display: flex;
        align-items: center;
        padding-left: 30px;
        color: grey;
         ${({displaying}) => (
            // based on the displaying prop value , we want switch some styles of the FileInput
            // the "displaying" prop is set by default to false and gets changed to true
            displaying 
            ?
            `
                font-size:14px;
                box-shadow: inset 6px 6px 3px #4de108,
                inset -6px -6px 6px white;
            `
            :
            `
                font-size:20px;
                box-shadow: inset 6px 6px 6px #d1cecb,
                inset -6px -6px 6px white;
            `

        )}
        letter-spacing: 1.5px;
    }
    input {
        display: none;
    }
`
