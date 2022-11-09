import styled from "styled-components"
// styling all the elements
export const CvBackground = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    padding-top: 40px;
    justify-content: center;
`
export const CvWrapper = styled.div`
    display: block;
    border: 1px solid black;
    width: 840px;
    height: 1188px;
    overflow: hidden;
    position: relative;
`
export const SecondHalf = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
`
export const StyledBars = styled.div`
    position: absolute;
    background-color: ${({clrs}) => `${clrs.mainClr}`};
    bottom: 0;
    
    height: 40px;
    width: 80%;
    z-index: 0;
    transform: skew(-30deg);

    &::before{
        content: '';
        background-color: ${({clrs}) => `${clrs.mainClr}`};
        position: absolute;
        width: 50%;
        height: 100px;
        right: -350px;
        bottom: 0;
    }
`