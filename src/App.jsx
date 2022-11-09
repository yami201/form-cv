// importing Route and Routes from react-router-dom to manages our app pages
import {Route, Routes} from "react-router-dom"

// importing the GlobalStyle element 
import { GlobalStyle } from "./global.styles"
// importing the 3 pages our app will have FormPage, ThemePicker and CvPage
import FormPage from "./components/routes/form-page/form-page.component"
import ThemePicker from "./components/routes/theme-picker/theme-picker.component"
import CvPage from "./components/routes/cv-page/cv-page.component"
// creating our App component
const App = () => {
    return (
        <>
            {
                // using the GlobalStyle before our app to render all the necesary styles given to it
            }
            <GlobalStyle/>
            {
                // when openning the app the first thing that will apear in the app is the FormPage, the user won't be able to acess the other two till he fills in the form
            }
            <Routes>
                <Route index path="/"  element={<FormPage/>}/>
                <Route path="/picker" element={<ThemePicker/>}/>
                <Route path="/cv" element={<CvPage/>}/>
            </Routes>
        </>
    )
}
export default App
