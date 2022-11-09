// CreateContext serre à declarer une variable global utilisé dans l'application ou un partie de l'application 
// useState est un hook de react qui serre à declarer une variable que l'app react prend compte lorsqu'elle change
import { createContext, useState } from "react";
// on crée un context UserContext pour l'application
export const UserContext = createContext({
    userInfo:null,
    setUserInfo:() => null,
    isReadyToDisplay:false,
    setIsReadyToDisplay:() => null
})
// on crée un fournisseur du context qui vas envlopper l'application pour l'accés du context
export const UserProvider = ({children}) => {
    // creation d'une state currentUser et setCurrentUser est utiliser pour le changement de la state
    const [userInfo,setUserInfo] = useState(null)
    const [isReadyToDisplay,setIsReadyToDisplay] = useState(false)
    // value doit contenir les inctances du context q'on vat utiliser dans l'app
    const value = { userInfo, setUserInfo, isReadyToDisplay,setIsReadyToDisplay} 
    // on retourne le fournisseur de l'utilisateur contexte pour son utilisation dans l'application
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}