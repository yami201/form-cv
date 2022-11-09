// Instead of using blank css, styled components makes things by allowing us to use css inside the javascript code
import styled from "styled-components";

// Creating a styled form and exporting it
export const Form = styled.form`
    margin-top: 40px;
    width: 95vw;
    height: 85vh;
    box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
    border-radius: 50px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
`
// creating a styled li element and exporting it 
export const ListeElm = styled.li`
    width: 500px;
    margin-bottom: 10px;
    align-items: center;
    ${
        // using the flex prop given the listeElm, we can switch between normal layouts and horizental layouts
        ({flex}) => flex && "display:flex;"
    }
`
// creating a styled button for add and remove buttons for the languages,hobbies,formations and skills fields
export const Button = styled.button`
    box-shadow: 3px 3px 6px #d1cecb,
                 -3px -3px 6px white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: grey;
    font-size: 38px;
    letter-spacing: 2px;
    padding: 10px;
    margin-top: 30px;
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
        cursor: pointer;
    }
    &:active{
        box-shadow: 1px 1px 3px #d1cecb,
                 -1px -1px 3px white;
    }
`
// Creating a styled span that will be the title for each of the 3 main fields
export const Title = styled.span`
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bolder;
    color: grey;
    text-shadow: 6px 6px 6px #d1cecb,
                -6px -6px 6px white;
`
// Creating a styled section, that each one will contain a main field
export const SectionWrapper = styled.section`
    height: 80vh;
    width: 28vw;
    border-right: 2px dotted grey;
    padding-left: 5px;
    overflow: hidden scroll;

    &:nth-child(3){
        width: 35vw;
        border-right: unset;
    }
`
// Creating a styled div that will be just a flexbox container for some elements
export const FlexWrapper = styled.div`
    display: flex;
    width: 300px;
`
// Creating a styled div that will be the container of the submit button , wich will center it in the bottom under the form
export const SubmitWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    left:0;
    width: 100%;
    display: flex;
    justify-content: center;
`
// Creating a styled button wich is the submit button for the form
export const SubmitBtn = styled.button`
    font-size: 22px;
    text-transform: uppercase;
    color: grey;
    padding: 10px 20px;
    border-radius: 25px;
    letter-spacing: 2px;
    font-weight: bold;
    box-shadow: 3px 3px 6px #d1cecb,
                 -3px -3px 6px white;
    &:hover{
        cursor: pointer;
    }
    &:active{
        box-shadow: 1px 1px 3px #d1cecb,
                 -1px -1px 3px white;
    }
`