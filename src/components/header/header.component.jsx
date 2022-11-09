// Importing the styled elements
import { 
    Wrapper,
    ImageHolder,
    DiamondBackground,
    Content,
    ColoredBar,
 } from "./header.styles";
// importing the useContext hook to use the UserContext and the ThemeContext
import { useContext } from "react";
// Importing the UserContext and the ThemeContext 
import { UserContext } from "../../utils/context/user.context";
import { ThemeContext } from "../../utils/context/theme.context"
const Header = () => {
    // destructuring the properites we need from each the ThemeContext and the UserContext
    const { themeClrs } = useContext(ThemeContext)
    const { userInfo:{imageUrl , firstName, secondName, profession} } = useContext(UserContext)
    return (
        <Wrapper clrs={themeClrs}>
            {
                // we need to pass the themeClrs to each element that needs them because we can't access a state outisde of components
            }
            <DiamondBackground clrs={themeClrs}/>
            <ImageHolder clrs={themeClrs}>
                {
                    // creating the an image url from the imageUrl File Object
                }
                <img src={URL.createObjectURL(imageUrl)}/>
            </ImageHolder>
            <Content clrs={themeClrs}>
                <h2>{firstName} {secondName}</h2>
                <span>{profession}</span>
            </Content>
            {
                // ColoredBar is just used for some design
            }
            <ColoredBar clrs={themeClrs}/>
        </Wrapper>
    );
}
 
export default Header;