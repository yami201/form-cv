import styled,{css} from "styled-components";

// creating the shrinkStyles of the label
const shrinkStyles = css`
    transform: translate(20px,5px);
    color: black;
`
// creating some custom box shadows
const success = css`
    box-shadow: inset 6px 6px 3px #4de108,
                inset -6px -6px 6px white;
`
const fail = css`
    box-shadow: inset 6px 6px 3px #e12508,
                inset -6px -6px 6px white;
`
const dft = css`
    box-shadow: inset 6px 6px 6px #d1cecb,
                inset -6px -6px 6px white;
`
// creating the custom styled input while setting its width to the value of the width prop and depending on the type too
export const Input = styled.input`
    padding: 10px;
    padding-left: 30px;
    border: unset;
    height: 41px;
    max-width: 800px;
    font-size: 18px;
    background-color: unset;
    color: grey;
    border-radius: 50px;
    transition: 500ms;
    resize: vertical;
    ${dft}
    width:${({width}) => `${width}`};
    ${({type}) => type==="number" && "width:200px"}
`
// creating a custom label that will act as a placeholder of the input and then move out when the user focusIn the input related to it based on the shrink value
export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    color: grey;
    font-size: 20px;
    letter-spacing: 1.5px;
    transition: 500ms;
    transform:translate(40px,40px);

    ${({shrink}) => shrink && shrinkStyles};
`
// creating a wrapper for the input and label so customize the clr of the input and the inset boxShadow of the input
export const InputWrapper = styled.div`
    display: block;
    position: relative;
    padding: 30px 0px 0px 10px;

    ${({res}) => {
        if(res === "success"){
            return `
                ${Input}{
                    ${success}
                }
                ${Label}{
                    color:#4de108;
                }
            `
        }
        if(res ==="fail"){
            return `
                ${Input}{
                    ${fail}
                }
                ${Label}{
                    color:red;
                }
            `
        }
    }}
`
