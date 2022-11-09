// importing the useState hook 
import { useState} from "react";
// importing the styled components that contains the custom styles
import { Input ,InputWrapper,Label} from "./input-elm.styles";
// Creating the InputElm component that will has the following props
    // label : the content of the label attached to the input
    // checker : wich checker function that will check the content of the input
    // isInput: because there is some inputs that needs to be textarea and that has a default value of true
    // width : the width of the input because there is some inputs that doesn't have the same width 
    // ...props : spreading if there is any other props
const InputElm = ({label,checker,isInput=true,width="350px",...props}) => {
    // creating a shrink state that will control the label animation when the user focusin or out from the input
    const [shrink,setShrink] = useState(false)
    // creating a res state that will control the clr of the border of the input
        // by default the clr is white and grey
        // if res===success it turns to green
        // if res===fail it turns to red
    const [res,setRes] = useState("default")
    // when the user focusin the input we change the state function
    const focusHandler = () => setShrink(true)
    // when the user focusout of the input
    const BlurHandler = event => {
        // if the user doesn't give any inputs to the input , we move back the label
        if(!event.target.value) {
            setShrink(false)
        }
        // depending on the result of the checker function we set the value of res to its correct value
        if(checker(event.target.value)){
            setRes("success")
        } else {
            setRes("fail")
        }
    }
    return ( 
        // we give the InputWrapper elm the res state to change the position of the label using css in styled components
        <InputWrapper res={res}>
            {
                // depending on the value of the isInput prop we render the Input either as a normal input or as a textAre
            }
            <Input  as={!isInput && "textarea"}
                {...props}
                onFocus={focusHandler}
                width={width}
                onBlur={event => BlurHandler(event)}/>
            <Label shrink={shrink}>{label}</Label>
        </InputWrapper>
    );
}
 
export default InputElm;