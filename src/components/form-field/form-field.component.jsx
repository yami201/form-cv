// we need useState to store the fields given by the user , and the useContext to use the global context of the user and themes
import { useState, useContext } from "react"
// we need useNavigate to redirect the user to the theme picker page after the form is validated
import { useNavigate } from "react-router-dom";
// impoting userContext to update the context when the form is valid and then switch the isReadyToPick state from the themeContext to true to display the themePicker
import { UserContext } from "../../utils/context/user.context";
import { ThemeContext } from "../../utils/context/theme.context";
// Importing the styled elements from form-field.styles.jsx
import { 
    Form,
    SubmitBtn,
    SubmitWrapper
 } from "./form-field.styles";
 // Imorting the checkers to make tests on the fields when the user submit
import {
    checkValidFirstName,
    checkValidSecondName,
    checkValidAge,
    checkValidEmail,
    checkValidAdress,
    checkValidPercentage,
    checkValidString,
 } from "../../utils/checkers";
 // Importing the form fields
import GeneralInfosField from "../generalinfos-field/generalinfos-field.component";
import EducationField from "../education-field/education-field.component";
import ExperienceField from "../experience-field/experience-field.component";
// defaultInfo will be the default value given to the useState hook to innitiallize with
const defaultInfo = {
    imageUrl:"",
    firstName:"",
    secondName:"",
    email:"",
    dateOfBirth:"",
    adress:"",
    profession:"",
    aboutMe:"",
    formations:[{
        visibility:true,
        content:{
            formationName:"",
            formationDescription:"",
        }
    },],
    skills:[
        {
            visibility:true,
            content:{
                skillName:"",
                percentage:null
            }
        },
    ],
    languages:[
        {
            visibility:true,
            content:""
        },
    ],
    hobbies:[
        {
            visibility:true,
            content:""
        },
    ]
}
// Creation of the FormField component that will contain all of the form
const FormField = () => {
    // creating a navigate function from the useNavigate hook to use it later to open the themepicekr route
    const navigate = useNavigate()
    // creation of the currentUser that will contain the userinfo temporally till the user submit and we assign it to the UserContext
    const [currentUser,setCurrentUser] = useState(defaultInfo)
    // getting the setUserInfo funtion from the UserContext to use it to update the UserContext
    const { setUserInfo } = useContext(UserContext)
    // getting the setIsReadyToPick function from the ThemeContext to use it to update the isReadyToPick bool to be able to show the route page when navigating to it
    const { setIsReadyToPick } = useContext(ThemeContext)
    // creation of the handleChange function that will be responsible of setting the special field of the currentUser state object for each input
    const handleChange = (event) => {
        // destructiong the fields - name - value - id from the event.target to make it easier to use them later
        const { name , value,id} = event.target
        // destructing the arrays -languages - skills - formations - hobbies from the currentUser object to update the specific field in them
        let { languages , skills , formations, hobbies } = currentUser
        // each input has a different name so using that name , we will know wich field we need to update inside the currentUser object
        switch (name) {
            // if the name attribute of the input is equal to  image , it means we need to imageUrl field in the currentUser 
            case "image":
                setCurrentUser({
                    ...currentUser,
                    imageUrl:event.target.files[0]
                })
                break;
            // if the name attribute of the input is equal to languages , we will use the id attribute of the input to know wich specific field we need to update in the array
            case "languages":
                languages[id] = {content:value,visibility:true}
                break;
            // same thing goes for the hobbies field
            case "hobbies":
                hobbies[id] = {content:value,visibility:true}
                break;
            // since each element of the Skills array has two different fields , if the name is SkillName then we will change the skillName property of that array's element
            case "skillName":
                skills[id] = {
                    content:{
                        percentage:skills[id].content.percentage,
                        skillName:value
                    },
                    visibility:true
                }
                break;
            // and if it is percentage we will change the percentage field, while keeping the other field to its previous value
            case "percentage":
                skills[id] = {
                    content:{
                        percentage:value,
                        skillName:skills[id].content.skillName
                    },
                    visibility:true
                }
                break;
            // same thing goes for the formations array , it has two fields formationDescription and formationName
            case "formationDescription":
                formations[id] = {
                    content:{
                        formationName:formations[id].content.formationName,
                        formationDescription:value,
                    },
                    visibility:true
                }
                break;
            case "formationName":
                formations[id] = {
                    content:{
                        formationName:value,
                        formationDescription:formations[id].content.formationDescription,
                    },
                    visibility:true
                }
                break;
            // if the name is different that the ones listed above , then we just need to asign the value of the input to property that is named the name as the input name
            default:
                setCurrentUser({
                    ...currentUser,
                    [name]:value
                })
                break;
        }
    }
    // this function checks all the inputs and retun true if everything is valid , if not it returns false
    const globalChecker = () => {
        // checking each single input and if it is not valid there is no need to check the other ones
        if(!checkValidFirstName(currentUser.firstName)) return false
        if(!checkValidSecondName(currentUser.secondName)) return false
        if(!checkValidAge(currentUser.dateOfBirth)) return false
        if(!checkValidAdress(currentUser.adress)) return false
        if(!checkValidEmail(currentUser.email)) return false
        if(!URL.createObjectURL(currentUser.imageUrl)) return false
        if(!checkValidString(currentUser.profession)) return false
        if(!checkValidString(currentUser.aboutMe)) return false
        // creating a checker indicator that will get if one of arrays fields is not valid
        let checker = true;
        // maping inside the languages array
        currentUser.languages.forEach(language => {
            // destructuring the language object
            const { visibility , content } = language
            // since we don't delete the fields we need just to check the ones with a visibility that is true and then we check the content
            if(visibility && !checkValidString(content)){
                // if the content is not valid then we set the checker to false
                checker = false
            }
        })
        // same thing goes for the other arrays
        currentUser.hobbies.forEach(hobby => {
            const { visibility , content } = hobby
            if(visibility && !checkValidString(content)){
                checker = false
            }
        })
        // except that skills and formations arrays has to element in their content we need to check each one
        currentUser.skills.forEach(skill => {
            const { visibility , content : {skillName,percentage}} = skill
            if(visibility && !checkValidString(skillName) && !checkValidPercentage(percentage)){
                checker = false
            }
        })
        currentUser.formations.forEach(formation => {
            const { visibility , content:{formationName,formationDescription}} = formation
            if( 
                visibility && 
                !checkValidString(formationName) &&
                !checkValidString(formationDescription)){
                checker = false
            }
        })
        // if everything is right in the arrays the checker default value (true) will stay , if not it will turn to false
        return checker
    }
    // the submitHandler function will trigger when the user submit the form
    const submitHandler = (e) => {
        // we don't want the form to refresh so we don't lose the fields given by the user
        e.preventDefault()
        // we need to check if everything is valid , if the user left any inputs empty or invalid before showing the resume
        if(globalChecker()){
            // if the globalChecker returns true then everything is good so it is time to update the UserContext
            setUserInfo({
                // spreading all fields of the currentUser state
                ...currentUser,
                // we don't need the elements that has been removed by the user so we filter into our arrays and create new ones that has only the fields with a visibility that is true
                languages: currentUser.languages.filter(language => language.visibility),
                hobbies: currentUser.hobbies.filter(hobby => hobby.visibility),
                skills:currentUser.skills.filter(skill => skill.visibility),
                formations:currentUser.formations.filter(formation => formation.visibility),
            })
            // setting the IsReadyToPick state from the ThemeContext to true to be able to get the ThemePicker page
            setIsReadyToPick(true)
            // everything left now is to navigate to the ThemePicker page
            navigate("/picker")
        } else {
            // if something given by the user is not valid, we alert them
            alert("please fill the form correctly")
        }
    }
    return (
        <Form >
            {
                // calling all the fields that contains our inputs
            }
            <GeneralInfosField 
                handleChange={handleChange}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />
            <ExperienceField
                handleChange={handleChange}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />
            <EducationField
                handleChange={handleChange}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />
            {
                // putting the submit btn in a wrapper so it is easier to center it using flexbox
            }
            <SubmitWrapper>
              <SubmitBtn onClick={submitHandler}>Submit</SubmitBtn>  
            </SubmitWrapper>
        </Form>
    );
}
export default FormField;