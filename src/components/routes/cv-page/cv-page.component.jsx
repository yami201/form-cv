// importing useContext to use the UserContext and ThemeContext
import { useContext } from "react";
import { UserContext } from "../../../utils/context/user.context";
import { ThemeContext } from "../../../utils/context/theme.context";
// import the Navitage Element 
import { Navigate} from "react-router-dom";
// importing the styled elements
import { CvBackground, CvWrapper, SecondHalf,StyledBars } from "./cv-page.styles"
// importing the necessary components 
import Header from "../../header/header.component";
import SideBar from "../../sidebar/sidebar.component";
import MainContent from "../../main-content/main-content.component";
//  Creation of the CvPage component wich will contain the cv route(page)
const CvPage = () => {
    // destructuring the themeClrs from the ThemeContext
    const { themeClrs } = useContext(ThemeContext)
    // destructuring the isReadyToDisplay from the UserContext 
    const { isReadyToDisplay } = useContext(UserContext)
    //if isReadyToDisplay is false , the Resume page shouldn't be shown so we navigate the user to the picker page
    if(!isReadyToDisplay) {
        return <Navigate  to="/picker"/>
    }
    return (
        <CvBackground >
            <CvWrapper>
                <Header />
                <SecondHalf>
                    <SideBar />
                    <MainContent />
                </SecondHalf>
                <StyledBars clrs={themeClrs}/>
            </CvWrapper>
        </CvBackground>
    );
}

export default CvPage;