// importing the styled components
import { CardsWrapper,ThemeCard } from "./theme-picker.styles";
// importing the useContext to use the ThemeContext and the UserContext
import { useContext } from "react";

import { ThemeContext } from "../../../utils/context/theme.context";
import { UserContext } from "../../../utils/context/user.context"
// importing Navigate elm and the useNavigate hook
import { Navigate, useNavigate } from "react-router-dom";
// importing the themes images
import FirstTheme from "../../assets/themes/firsttheme.png"
import SecondTheme from "../../assets/themes/secondtheme.png"
import ThirdTheme from "../../assets/themes/thirdtheme.png"
// creating an object that will contains all the three themes that will be availabble for the user to pick of
const themes = [
    {
        mainClr:"#deee2f",
        darkClr:"#102d42",
    },
    {
        mainClr:"#d37809",
        darkClr:"black",
    },
    {
        mainClr:"#0de4a3",
        darkClr:"#102d42",
    }
]

// creation fo the ThemePicker component that will let the user pick wich colors he wants in his resume
const ThemePicker = () => {
    // destructuring the setThemeClrs , the isReadyToPick properties
    const { setThemeClrs,isReadyToPick } = useContext(ThemeContext)
    // destructuring the setIsReadyToDisplay property from the UserContext
    const navigate = useNavigate()
    // creating the colorPicker function that gets the id as an argument and it sets the themeClrs to the related theme to that id, and then it navigate to the cv page after setting isReadyToDisplay to true
    const colorPicker = (id) => {
        setThemeClrs(themes[id])
        setIsReadyToDisplay(true)
        navigate("/cv")
    }
    const { setIsReadyToDisplay } = useContext(UserContext)
    // creating the navigate function using the useNavigate hook
    if(!isReadyToPick){
        return <Navigate to="/"/>
    }
    return ( 
        // Showing the cards that are pictures of the themes
        <CardsWrapper>
            <ThemeCard 
                frameClr={themes[0].mainClr} 
                onClick={() => colorPicker(0)}>
                <img src={FirstTheme}/>
            </ThemeCard>
            <ThemeCard 
                frameClr={themes[1].mainClr}
                onClick={() => colorPicker(1)}>
                <img src={SecondTheme}/>
            </ThemeCard>
            <ThemeCard 
                frameClr={themes[2].mainClr} 
                onClick={() => colorPicker(2)}>
                <img src={ThirdTheme}/>
            </ThemeCard>
        </CardsWrapper>
     );
}
export default ThemePicker;