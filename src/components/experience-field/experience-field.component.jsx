// Importing the styled elements from form-field.styles.jsx
import { SectionWrapper, Title } from "../form-field/form-field.styles";
// Importing the LanguageField component
import LanguageField from "../language-field/language-field.component";
// Importing the SkillsField component
import SkillsField from "../skills-field/skills-field.component";
// Creation of the ExperienceField component that has 3 props:
    // handleChange is the function that checks wich field of the currentUser object to change
    // currentUser is the user's state where we store what the user fills in the inputs
    // setCurrentUser is the setState function for currentUser
const ExperienceField = ({currentUser,setCurrentUser,handleChange}) => {
    return ( 
        <SectionWrapper>
            <Title>EXPERIENCE FIELD</Title>
            {
                // both SkillsField and LanguageField has simillar structure , so they need the same props
            }
            <SkillsField 
                handleChange={handleChange}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />
            <LanguageField 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                handleChange={handleChange}
            />
        </SectionWrapper>
     );
}
 
export default ExperienceField;