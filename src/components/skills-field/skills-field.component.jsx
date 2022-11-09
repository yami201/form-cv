//
//
// the structure of this component is the same as the education component
//
//
import { 
    checkValidString,
    checkValidPercentage
 } from "../../utils/checkers";
import {
    ListeElm,
    Button,
    FlexWrapper,
 } from "../form-field/form-field.styles";
import InputElm from "../input-elm/input-elm.component";
const SkillsField = ({currentUser,setCurrentUser,handleChange}) => {
    const addSKillField = () => {
        setCurrentUser({
            ...currentUser,
            skills:[ ...currentUser.skills,{
                visibility:true,
                content:{
                    percentage:null,
                    skillName:""
                }
            }]
        })
    }
    const deleteSkillField = (event) => {
        let skills = [...currentUser.skills]
        skills[event.target.id].visibility = false
        console.log(skills)
        setCurrentUser({...currentUser,skills})
    }
    return (
        <ul>
            <InputElm
                label="Skill Name"
                checker={checkValidString}
                type="text"
                required
                name="skillName"
                id={0}
                onChange={handleChange}
            />
            <FlexWrapper>
                <InputElm
                    label="Level"
                    checker={checkValidPercentage}
                    type="number"
                    required
                    name="percentage"
                    id={0}
                    onChange={handleChange}
                />
                <Button type="button" onClick={addSKillField}> + </Button>
            </FlexWrapper>
            {
                currentUser.skills.map((elm,index) => (
                    (elm.visibility)
                    &&
                    (index >= 1)
                    &&
                    (
                        <ListeElm key={index}>
                            <InputElm
                                label="Skill Name"
                                checker={checkValidString}
                                type="text"
                                required
                                name="skillName"
                                id={index}
                                onChange={handleChange}
                            />
                            <FlexWrapper>
                                <InputElm
                                    label="Level"
                                    checker={checkValidPercentage}
                                    type="number"
                                    required
                                    name="percentage"
                                    id={index}
                                    onChange={handleChange}
                                />
                                <Button type="button" onClick={addSKillField}> + </Button>
                                <Button 
                                    type="button" 
                                    id={index} 
                                    onClick={deleteSkillField}> - </Button>
                            </FlexWrapper>
                        </ListeElm>
                    )
                ))
            }
        </ul>
    );
}
 
export default SkillsField;