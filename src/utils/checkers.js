// this function checks if a string contains any special characters or numbers
const checkSpecialChar = str => {
    // we initialize a variable that will be the indicator , it is initiallized on true and if there is anything wrong , it will become false
    var test = true
    // if the input is empty , then there is nothing to check
    if(!str) return false
    // we set all of the characters of the string to lower case so and we turn into an array to use the forEach method
    str.toLowerCase().trim().split("").forEach(char => {
        // the string may contain spaces so we don't need to get them in the checks
        if(char.charCodeAt() === 32) return
        // lower case letters has an ASCII value between 97 and 122 , wich will be the way of checking 
        if(!(char.charCodeAt() >= 97 && char.charCodeAt() <= 122)){
            // if a character is not a letter then we turn the indicator to false
            test = false
        }
    })
    // the indicator is the result of the checks
    return test
}
// this function checks if the argument given to it is all uppercase and doesn't contain any special characters or numbers
export const checkValidSecondName = name => {
    // we compare the uppercase version of the string to its normal value, if the uppercase version is not equal to its normal value then 
    if(!(name.toUpperCase() === name)) return false
    // after comparing it , now we check if it contains any special characters or numbers
    return checkSpecialChar(name)
}
// this function checks if the first letter of its argument is an uppercase and if it doesn't contain any special characters or numbers
export const checkValidFirstName = name => {
    // we compare the uppercase version of the first letter and the letter itself
    if(!(name.toUpperCase()[0] === name[0])) return false
    // after checking the first letter , now we check if it contains any special characters or numbers
    return checkSpecialChar(name)
}
// this function checks if the arguement given to it has a valid form of an email
export const checkValidEmail = email => {
    // we innitialize a regular expretion wich is going to check our email
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    // the test method , checks if its arguement has a valid form of an email in this case
    return regexExp.test(email)
}
// this function checks if the arguemnt given to it contains any special characters or numbers 
export const checkValidString = title => 
    // we return the result of the check
    checkSpecialChar(title)

// this function checks if the arguemnt given to it contains any special characters, or if its length is more than 300
export const checkValidAdress = adress => {
    // if the input is empty , then we have nothing to check
    if(!adress) return 
    // we check if the length of the adress is more then 300
    if(adress.length > 300) return false
    // we initialize our tester veriable
    var test = true
    // we set all of the characters of the string to lower case so and we turn into an array to use the forEach method
    adress.toLowerCase().split("").forEach(char => {
        // the string may contain spaces so we don't need to get them in the checks
        if(char.charCodeAt() === 32) return
        // an adress may contain numbers so we don't need to check them
        if(!isNaN(char)) return
        // after checking spaces and numbers , we will be left with letters and special characters and it is what we check here
        if(!(char.charCodeAt() >= 97 && char.charCodeAt() <= 122)){
            // if a character is not a letter then we turn the indicator to false
            test = false
        }
    })
    // the indicator is the result of the checks
    return test
}
// this function checks if the age calculated from the date given is higher than 18
export const checkValidAge = date => {
    // using the Date class we can get the difference between the date given and 1/1/1970 and substract it from the current date , after it is just a matter of calucating the number of years from milliseconds
    let delta = (new Date().getTime() - new Date(date).getTime())/ (1000 * 3600 * 24 * 365)
    // if the age if higher than 18 , it is what we want
    return delta >= 18
}
// this function checks if the number given to it is a valid percentage
export const checkValidPercentage = percentage => {
    if(!percentage) return false
    // a percentage should be between 0 and 100
    return (percentage >= 0 && percentage <= 100)
}
