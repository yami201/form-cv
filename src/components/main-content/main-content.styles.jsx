import styled from "styled-components"

export const ContentWrapper = styled.main`
    height: 100%;
    padding-top: 30px;
`
export const SectionTitle = styled.h1`
    text-transform: uppercase;
    color:${({clrs}) => `${clrs.darkClr}`};
    font-size: 36px;
    letter-spacing: 3px;
    text-shadow: 6px 6px 6px #d1cecb,
                -6px -6px 6px white;
    margin-bottom: 20px;
`
export const Section = styled.section`
    padding: 0 30px 30px 30px;
    text-align: justify;
`
export const AboutMeContent = styled.p`
    &::first-letter{
        margin-left: 20px;
    }
    font-size: 20px;
`
export const ExpListe = styled.ul`
    border-left: 5px solid ${({clrs}) => `${clrs.mainClr}`};
`
export const ExpInfo = styled.li`
    padding-bottom: 20px;
    span{
        margin: 20px 30px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 18px;
        &::before{
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: ${({clrs}) => `${clrs.mainClr}`};
            transform: translateX(-42.5px);
        }
    }
    p{
        margin-top: 10px;
        margin-left: 10px;
        text-align: justify;
        font-size: 14px;

    }
`
export const SkillsListe = styled.ul`
    display: grid;
    gap: 20px;
`
export const Skill = styled.li`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-left: 10px;
    width: 500px;
    display: flex;
    position: relative;
`
export const SkillRate = styled.span`
    position: absolute;
    width: 400px;
    height: 100%;
    right: 0;
    border-radius: 5px;
    border: 1px solid ${({clrs}) => `${clrs.darkClr}`};

    &::before{
        content: '';
        position: absolute;
        height: 100%;
        width: ${({level}) => `${level}`}%;
        background-color: ${({clrs}) => `${clrs.darkClr}`};
        border-radius: 0 25px 25px 0
    }
`
