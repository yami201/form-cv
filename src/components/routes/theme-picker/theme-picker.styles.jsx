import styled from "styled-components";

export const CardsWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`
// each card is a div that contains an image inside it and by hovering in it we change the shape of the ::before element related to that card and the boxshadow
export const ThemeCard = styled.div`
    width: 300px;
    height: 500px;
    margin: 0px 30px;
    display: block;
    border-radius: 10px;
    box-shadow: 6px 6px 6px #d1cecb;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 500ms;
    img{
        width: 300px;
        height: 500px;
        border-radius: 10px;
        transition: 500ms;;
    }
    &::before{
        content: '';
        position: absolute;
        height: 600px;
        width: 150px;
        background-color: ${({frameClr}) => `${frameClr}`};
        z-index: -1;
        transform: skewX(-15deg);
        transition:500ms;
    }
    &:hover{

        box-shadow: 0 0 30px ${({frameClr}) => `${frameClr}`};
        width:400px;
        height: 600px;
        img{
            width: 400px;
            height: 600px;
        }
        &::before{
            transform:skewX(0);
            width:200px;
            height:800px;
        }
    }
`