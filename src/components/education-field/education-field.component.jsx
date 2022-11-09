// Importing the styled elements from form-field.styles.jsx
import {
    ListeElm,
    Button,
    Title,
    SectionWrapper,
    FlexWrapper
 } from "../form-field/form-field.styles";
// Importing the stringchecker
import { checkValidString } from "../../utils/checkers";
// Importing the custom input element
import InputElm from "../input-elm/input-elm.component";
// Creation of the EductionField component that has 3 props:
    // handleChange is the function that checks wich field of the currentUser object to change
    // currentUser is the user's state where we store what the user fills in the inputs
    // setCurrentUser is the setState function for currentUser
const EducationField = ({handleChange,currentUser,setCurrentUser}) => {
    // creation of a function that will allow the user to add formation fields
    const addFormationField = () => {
        // we spread the last user state and the formations array too , but with a new field
        setCurrentUser({
            ...currentUser,
            formations:[ ...currentUser.formations,{
                visibility:true,
                content:{},
            }]
        })
    }
    // creation of a function that will allow the user to remove formation fields that he added if he don't need that many
    const deleteFormationField = (event) => {
        // creating a copy of the currentUser's formations
        let formations = [...currentUser.formations]
        // we don't actually remove the field from the array , we just change its visibility to false because it is what we look for to render that element
        formations[event.target.id].visibility = false
        // after switching the element visibility we update the currentUser state
        setCurrentUser({...currentUser,formations})
    }
    return (
        <SectionWrapper>
            {
                // we render the education field of the form here
            }
            <Title>EDUCATION INFOS
            </Title>
            <ul>
                {
                    // the custom input element recquire some props wich are
                        //  label : the content that the label attacher to the input will display
                        //  checker : the function that checks if its value is right or not
                        //  type : the type of the input
                        //  required 
                        //  name : is used to handleChange function
                        //  onChange: gets the handleChange function
                        //  isInput : because it can be either an input or a textarea for long fields
                }
                {
                    // for each element of the formations array we create a li element that has the input fields for education field
                    currentUser.formations.map((elm,index) => (
                        // as told before , each element has a visibitly boolean that is set by default to true , but when the user click the remove button attached to that field its visibility turn to false
                        (elm.visibility)
                        &&
                        (
                            <ListeElm key={index}>
                                <InputElm
                                    label="Formation"
                                    checker={checkValidString}
                                    type="text"
                                    required
                                    name="formationName"
                                    id={index}
                                    onChange={handleChange}
                                />
                                <FlexWrapper>
                                    <InputElm
                                        label="Description"
                                        checker={checkValidString}
                                        isInput={false}
                                        type="text"
                                        required
                                        name="formationDescription"
                                        id={index}
                                        onChange={handleChange}
                                    />
                                    <Button type="button" onClick={addFormationField}> + </Button>

                                    {
                                        // the first element that has an index of 0 won't have a delete button , the user needs to have at least one field
                                        (index >= 1)
                                        &&
                                        <Button 
                                            type="button" 
                                            id={index} 
                                            onClick={deleteFormationField}> - </Button>
                                    }
                                </FlexWrapper>
                            </ListeElm>
                        )
                    ))
                }
            </ul>
        </SectionWrapper>
     );
}
 
export default EducationField;