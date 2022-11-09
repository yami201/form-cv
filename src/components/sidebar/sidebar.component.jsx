// importing the styled components
import { SectionTitle, StyledUl, Wrapper } from "./sidebar.styles";
// importing Three svg icons as ReactComponent to allow us to use them as normal components
import {ReactComponent as MailIcon} from "../assets/mail.asset.svg"
import {ReactComponent as MapPinIcon} from "../assets/map-pin.asset.svg"
import {ReactComponent as DateIcon} from "../assets/date.asset.svg"
// importing our both contexts and the useContext hooks
import { UserContext } from "../../utils/context/user.context";
import { ThemeContext } from "../../utils/context/theme.context"
import { useContext } from "react";
const SideBar = () => {
    // destructing the necessary properties from the UserContext and the ThemeContext
    const { userInfo:{email, adress , languages, hobbies, dateOfBirth} } = useContext(UserContext)
    const { themeClrs } = useContext(ThemeContext)
    return (

        <Wrapper clrs={themeClrs}>
            <SectionTitle clrs={themeClrs}>contacts</SectionTitle>
            <StyledUl clrs={themeClrs}>
                <li>
                    <MailIcon/>
                    {email}
                </li>
                <li>
                    <MapPinIcon/>
                    {adress}
                </li>
                <li>
                    <DateIcon/>
                    BORN THE : {dateOfBirth}
                </li>
            </StyledUl>
            <SectionTitle clrs={themeClrs}>Languages</SectionTitle>
            {
                // mapping in the languages and the hobbies array to display liste elements for each of their elements
            }
            <StyledUl clrs={themeClrs}>
                {
                    languages.map((lan,index) => <li key={index}>{lan.content}</li>)
                }
            </StyledUl>
            <SectionTitle clrs={themeClrs}>Hobbies</SectionTitle>
            <StyledUl clrs={themeClrs}>
                {
                    hobbies.map((hobby,index) => <li key={index}>{hobby.content}</li>)
                }
            </StyledUl>
        </Wrapper>
    );
}
export default SideBar;