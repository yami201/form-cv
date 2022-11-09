// importing createContext and useState hook 
import { createContext, useState } from "react";
// creating a context using the createContext that will be responsible to store the themeClrs and isReadyToPick fields
    // themeClrs is the theme the user will pick in the themePicker
    // isReadyToPick is a bool that according to its value we can open the page "/picker" or ThemePicker
export const ThemeContext = createContext({
    themeClrs:null,
    setThemeClrs:() => null,
    isReadyToPick:null,
    setIsReadyToPick:() => null,
})
// creating the ThemeProvider to wrap our app with it to be able to access this context in all of the app
export const ThemeProvider = ({children}) => {
    // creating two states that are our context fields
    const [themeClrs,setThemeClrs] = useState(null)
    const [isReadyToPick ,setIsReadyToPick] = useState(false)
    // creating an object that will be given to the provider that contains all the fields we will need from the context
    const value = { themeClrs, setThemeClrs,isReadyToPick ,setIsReadyToPick }
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}