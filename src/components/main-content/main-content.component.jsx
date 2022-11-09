// importing the styled components, useContext,UserContext and ThemeContext
import { ContentWrapper,
    SectionTitle,
    Section,
    ExpInfo, 
    ExpListe,
    AboutMeContent,
    SkillsListe,
    SkillRate,
    Skill,
} from "./main-content.styles";
import { useContext } from "react";
import { UserContext } from "../../utils/context/user.context";
import { ThemeContext } from "../../utils/context/theme.context"
const MainContent = () => {
    // destructuring themeClrs from the ThemeContext and from the userInfo that is inside the UserContext the next fields : aboutMe,formations,skils
    const { themeClrs } = useContext(ThemeContext)
    const { userInfo : {aboutMe,formations,skills}} = useContext(UserContext)
    return (
        <ContentWrapper>
            <Section>
                <SectionTitle clrs={themeClrs}>about me</SectionTitle>
                <AboutMeContent> {aboutMe} </AboutMeContent>
            </Section>
            <Section>
                <SectionTitle clrs={themeClrs}>education</SectionTitle>
                <ExpListe clrs={themeClrs}>
                    {
                        // mapping in the formations array to disply each field given by the user 
                        formations.map(({content :{formationName,formationDescription}},index)=> (
                            <ExpInfo key={index} clrs={themeClrs}>
                                <span>{formationName}</span>
                                <p>{formationDescription}</p>
                            </ExpInfo>
                        ))
                    }
                </ExpListe>
            </Section>
            <Section>
                <SectionTitle clrs={themeClrs}>skills</SectionTitle>
                <SkillsListe>
                    {
                        // same thing that we did with formations
                        skills.map(({content:{skillName,percentage}},index) => (
                            <Skill key={index}>
                                <span>{skillName}</span>
                                {
                                    // we give the skillRate bar the percentage value to set its width
                                }
                                <SkillRate level={percentage} clrs={themeClrs}/>
                            </Skill>
                        ))
                    }
                </SkillsListe>
            </Section>
        </ContentWrapper>
    );
}
 
export default MainContent;