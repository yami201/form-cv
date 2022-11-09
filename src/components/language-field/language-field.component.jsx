// this files is simillar to the hobbies-field.component.jsx the only difference is there we work on the hobbies array and here we work on the languages array

import { checkValidString } from "../../utils/checkers";
import { 
    ListeElm,
    Button,
 } from "../form-field/form-field.styles";
import InputElm from "../input-elm/input-elm.component";
const LanguageField = ({handleChange,currentUser,setCurrentUser}) => {
    const addLanguageField = () => {
        setCurrentUser({
            ...currentUser,
            languages:[ ...currentUser.languages,{
                visibility:true,
                content:""
            }]
        })
    }
    const deleteLanguageField = (event) => {
        let languages = [...currentUser.languages]
        languages[event.target.id].visibility = false
        console.log(languages)
        setCurrentUser({...currentUser,languages})
    }
    return (
        <ul>
                {
                    currentUser.languages.map((elm,index) => (
                        (elm.visibility)
                        &&
                        (
                            <ListeElm key={index} flex={true}>
                                <InputElm
                                    label="Language"
                                    checker={checkValidString}
                                    width="230px"
                                    type="text"
                                    required
                                    name="languages"
                                    id={index}
                                    onChange={handleChange}
                                />
                                <Button type="button" onClick={addLanguageField}> + </Button>
                                {
                                    (index >= 1)
                                    &&
                                    <Button 
                                        type="button" 
                                        id={index} 
                                        onClick={deleteLanguageField}> - </Button>}
                            </ListeElm>
                        )
                    ))
                }
            </ul>
    );
}
 
export default LanguageField;