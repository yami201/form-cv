// Importing the checkers to make tests on the fields when the input lose focus from the iuser
import { 
    checkValidFirstName,
    checkValidSecondName,
    checkValidEmail,
    checkValidAdress,
    checkValidAge,
    checkValidString
 } from "../../utils/checkers";
// Importing some styled elements from the form-field.styles
import { Title, SectionWrapper } from "../form-field/form-field.styles";
// Importing the InputElm component that is a custom input with a label
import InputElm from "../input-elm/input-elm.component";
// Importing an svg as a react element for the image input
import { ReactComponent as UploadIcon} from "../assets/upload.asset.svg";
// Importing the Styled label, FileInput
import { FileInput } from "./generalinfos-field.styles";
// Importing the HobbiesField component
import HobbiesField from "../hobbies-field/hobbies-field.component";
// Creation of the GeneralInfosfield that has the standard 3 props : handleChange,currentUser,setCurrentUser
const GeneralInfosField = ({handleChange,currentUser,setCurrentUser}) => {
    return (
        <SectionWrapper>
            <Title>General Infos</Title>
            {
                // the FileInput is actually a label linked to a file input, to create a custom input look
            }
            <FileInput htmlFor="file-input" displaying={currentUser.imageUrl}>
                {
                    // depending if the user has already gave an image or not, the content of the span is custom
                        // if the user hasn't yet gave an image the span display "Upload your image" message 
                        // if not, it displays the name of the image file given by the user
                }
                <span>
                    {
                        currentUser.imageUrl ? currentUser.imageUrl.name : <>Upload your image</>
                    }
                </span>
                <UploadIcon/>
                {
                    // here is the file input that can accept image files only
                }
                <input 
                    id="file-input" 
                    name="image"
                    type="file" 
                    required
                    accept="image/*" 
                    onChange={handleChange}/>
            </FileInput>
            {
                // Now just bunch of inputElm components being called with different props so that each one refers to a specific field in the currentUser object
                // and after it we call the HobbiesField component
            }
            <InputElm
                label="First name"
                checker={checkValidFirstName}
                type="text"
                required
                name="firstName"
                onChange={handleChange}
            />
            <InputElm
                label="Second name"
                checker={checkValidSecondName}
                type="text"
                required
                name="secondName"
                onChange={handleChange}
            />
            <InputElm 
                label={""}
                checker={checkValidAge}
                isInput={true}
                type="date"
                required
                name="dateOfBirth"
                onChange={handleChange}
            />
            <InputElm 
                label="Email"
                checker={checkValidEmail}
                isMail={true}
                type="mail"
                required
                name="email"
                onChange={handleChange}
            />
            <InputElm 
                label="Profession"
                checker={checkValidString}
                type="text"
                required
                name="profession"
                onChange={handleChange}
            />
            <InputElm 
                label="Adress"
                checker={checkValidAdress}
                isInput={false}
                type="text"
                required
                name="adress"
                onChange={handleChange}
            />
            <InputElm 
                label="About Me"
                checker={checkValidAdress}
                isInput={false}
                type="text"
                required
                name="aboutMe"
                onChange={handleChange}
            />
            <HobbiesField
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                handleChange={handleChange}
            />

        </SectionWrapper>
    )
}
 
export default GeneralInfosField;