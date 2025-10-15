// Import readline-sync
const input = require("readline-sync");

// Prompt the user for their name and password
let userName = input.question("Enter your username? ");

//Function to check the requirements

function isValidPassword(password){
 if(password < 8){
    return false;
 }
let hasUppercase = false;
let hasNumber = false;
for(char of password)
{
    if(char >= 'A' && char <= 'Z'){
        hasUppercase = true;
    }

    if(char >='0' && char<='9'){
    hasNumber = true;
   }
}
return hasUppercase && hasNumber;
}
// do while loop to prompt the user to enter the password until it meets all the requirements
do{
    password = input.question("Enter your password? ");
    passwordValid = isValidPassword(password);
if(!passwordValid){
    console.log("Please enter a valid password - it must be 8 characters long and include atleast one uppercase and number");
}
}while(!passwordValid);
console.log("Login successful!!!!");
