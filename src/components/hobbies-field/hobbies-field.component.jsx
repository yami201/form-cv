// importing the checkValidString chekcer from the checkers files
import { checkValidString } from "../../utils/checkers";
// importing some styled components
import { 
    ListeElm,
    Button,
 } from "../form-field/form-field.styles";
// import the InputElm component
import InputElm from "../input-elm/input-elm.component";
// creation of the Hobbiesfield component with our standard triple props
const HobbiesField = ({handleChange,currentUser,setCurrentUser}) => {
    // the addHobbyField is the same function that we have in all the other arrays fields
    const addHobbyField = () => {
        setCurrentUser({
            ...currentUser,
            hobbies:[ ...currentUser.hobbies,{
                visibility:true,
                content:""
            }]
        })
    }
    // same thing goes for the deleteHobbyField function
    const deleteHobbyField = (event) => {
        let hobbies = [...currentUser.hobbies]
        hobbies[event.target.id].visibility = false
        setCurrentUser({...currentUser,hobbies})
    }
    return (
        <ul>
                {
                    currentUser.hobbies.map((elm,index) => (
                        (elm.visibility)
                        &&
                        (
                            <ListeElm key={index} flex={true}>
                                <InputElm
                                    label="Hobby"
                                    checker={checkValidString}
                                    width="230px"
                                    type="text"
                                    required
                                    name="hobbies"
                                    id={index}
                                    onChange={handleChange}
                                />
                                <Button type="button" onClick={addHobbyField}> + </Button>
                                {
                                    (index >= 1)
                                    &&
                                    <Button 
                                        type="button" 
                                        id={index} 
                                        onClick={deleteHobbyField}> - </Button>}
                            </ListeElm>
                        )
                    ))
                }
            </ul>
    );
}
 
export default HobbiesField;