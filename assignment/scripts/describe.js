// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We assign a variable called name and set it to 'Dane'.
// Then we have a conditional, that if name is Mary, there will be a console log of 'Hi, Mary!'.
// If name is anything else, there will be a console log of 'How do you do?'.
// Since name = Dane and hadn't been changed, we will see 'How do you do?' in the console.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// A variable of secret is declared. A variable of code is declared and it is assigned the number 123. 
// There is a conditional that if the code === 123, secret will then be assigned the string 'super' and code will now equal code times 2. 
// This means that now the following is true:
// secret = 'super'
// code = 246
// Another conditional will then run that if the code is now greater than 250, secret will now be assigned a string of 'duper.
// Since code = 246, code does not fulfill the second conditional therefore a console.log(secret) will return the string 'super'.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// A variable of isStudent is assigned the boolean of true. A variable of age is assigned the number 34. A variable of zip is assigned the number of 55407.
// A conditional with multiple if/else statements will cause one console.log to run. If statement 1 is correct because isStudent is true, but the zip is not greater than 80000. Therefore the console.log(`You're a student on the West Coast!`) will not run. 
// If statement 2 will not run because both parts of the statement are not true. The variable is a student and they are older than 30 years old. Therefore, the console.log('What are your hobbies?') will not run. 
// If statement 3 matches the variable isStudent = true so a console.log of 'Welcome to Prime!' will run in the console. 
// The last statement will not run because the program stops once it meets the condtional set forth in if statement 3 that is true. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// Fix -- Only colorOne will be set to 'purple' according to the variables and conditional. If (mix === true) it should appear as the following according to the instructions:
// if (mix === true) {
//   colorOne = 'purple',
//   colorTwo = 'purple';
// }
// If I could change it completely, I would create a colorThree = 'purple' if mix === true. This seems more logical to me, rather than assigning 'purple' to both colorOne and colorTwo. 

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// Fix -- the wording is incorrect because the conditional has an 'Or' (||) operator instead of an 'AND' (&&) operator. To make the description correct, replace the || with &&. I also have a problem with using const instead of let for the time. To me, time would be a variable that changes and doesn't stay constant in this instance since you are dealing with time being left out of a fridge or cooling space. 
// let time = 4 -- would be more correct in this instance. 

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
// Fix -- I would completely rewrite to the following:
if (age >= minAge) {
  console.log('entry');
} else {
  console.log('no entry');
}
// At minimum, 'entry' and 'no entry' need to change places in the conditional because entry should be given to someone who is greater than or equal to the age 21. 
*/

