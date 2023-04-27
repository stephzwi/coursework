//Create a string for the user saying: "You have received this message because you have been chosen to open an important vault.""
//Here is the secret combination: 65 - 43 - 23
//Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). 
//Each must equal one of the three codes in the combination.
//Add comments throughout the code to explain each step in the process.
//Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.

//Step 1. Create string saying "You have received this message because you have been chosen to open an important vault."
let message = "Great job warrior, your efforts have gained you an important code"
//Step 2. create variables to get the number for the codes 
let code01;
let code02;
let code03;

//step 3. Using different variables assign the code values.
code01 = 5 * 13;
code02 = 63 - 20;
code03 = 11 + 12;

//Step 4. Create message the gives the code approiately.
let secret = `${code01}-${code02}-${code03}`;
//Step 5. create a dialog box for when the user uses this page.
alert(`${message} ${secret}`)

