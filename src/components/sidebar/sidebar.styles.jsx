import styled from "styled-components"


export const Wrapper = styled.div`
    background-color: ${({clrs}) => clrs.darkClr};
    height: 100%;
    width:40%;
    z-index: 2;
    padding: 100px 20px 0 10px;
    color: white;
`
// using boxShadow to create the bars that are in the left of the each Title in the sideBar of the cv
export const SectionTitle = styled.h1`
    color:${({clrs}) => clrs.mainClr};
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: -20px 0 0 ${({clrs}) => clrs.darkClr},
            -25px 0 0 ${({clrs}) => clrs.mainClr},
            -30px 0 0 ${({clrs}) => clrs.darkClr},
            -35px 0 0 ${({clrs}) => clrs.mainClr},
            -40px 0 0 ${({clrs}) => clrs.darkClr},
            -70px 0 0 ${({clrs}) => clrs.mainClr};
    margin-bottom: 20px;
    margin-left: 60px;
`
export const StyledUl = styled.ul`
    display: grid;
    gap: 20px;
    li{
        margin-left: 50px;
        text-transform: uppercase;
        font-size: 12px;
    }
    &:nth-child(2) li{
        display: flex;
        margin-left: unset;
        text-transform: unset;
        font-size: unset;
        font-size: 14px;
        svg{
            color: ${({clrs}) => clrs.mainClr};
            width: 20px;
            height: 20px;
            margin-right:20px ;
            margin-left: 10px;
        }
    }
    margin-bottom: 50px;
`

