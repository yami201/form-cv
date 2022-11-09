import styled from "styled-components"

// creating a styled header and giving it themeClrs prop
export const Wrapper = styled.header`
    height: 25%;
    width: 100%;
    background-color: ${({clrs}) => `${clrs.darkClr}`};
    position: relative;
    margin-bottom: 5%;
    z-index: 2;
`
// creating a styled div that will contain our image
export const ImageHolder = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    transform: translate(50px,80px) rotate(45deg);
    box-shadow: 7px 7px 0 7px ${({clrs}) => `${clrs.mainClr}`};
    z-index: 2;
    img{
        width: 150%;
        height: 150%;
        transform: rotate(-45deg);
        position: absolute;
        top: -48px;
        right: -48px;
    }
`
// creating a styled span that is just the diamond background for the image
export const DiamondBackground = styled.span`
    content: '';
    position: absolute;
    z-index: 1;
    width: 270px;
    height: 270px;
    background-color: ${({clrs}) => `${clrs.mainClr}`};
    transform: translate(15px,-20px) rotate(45deg);
    box-shadow: 0 -10px 0 ${({clrs}) => `${clrs.darkClr}`};
`
// creating a styled div that will contain the name and the profssion fields
export const Content = styled.div`
    background-color: white;
    position: absolute;
    width: 55%;
    height: 37%;
    left: 30%;
    bottom: 24%;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 70px;
    h2{
        font-size: 28px;
        letter-spacing: 2px;
        font-weight: bolder;
        text-transform: uppercase;
    }
    span{
        font-size: 20px;
        color: #414141;
        letter-spacing: 2px;
        padding-left: 10px;
    }
    &:before{
        content: '';
        position: absolute;
        width: 60%;
        height: 5px;
        background-color: ${({clrs}) => `${clrs.mainClr}`};
        transform: translate(-20px,-80px);
        box-shadow: -20px -10px 0 ${({clrs}) => `${clrs.mainClr}`},
            -40px -20px 0 ${({clrs}) => `${clrs.mainClr}`},
            -60px -30px 0 ${({clrs}) => `${clrs.mainClr}`};
    }
`
// creating a styled span that is just a colered bar with some box-shadow that cover the bottom left part of the header
export const ColoredBar = styled.span`
    position: absolute;
    background-color: ${({clrs}) => `${clrs.mainClr}`};
    width: 150px;
    height: 80px;
    right: -50px;
    transform: skewX(-30deg);
    box-shadow: -20px 0 0 ${({clrs}) => `${clrs.darkClr}`},
                -40px 0 0 ${({clrs}) => `${clrs.mainClr}`},
                -60px -20px 0 ${({clrs}) => `${clrs.darkClr}`};
`