'use strict'

//When writing code

//how to declare a variable 
//variable is a label for something.

//let is required. it tells us we are about to start declaring a variable.
//potato is the name of the variable
//after the = is the name of the variable
// a sentance for this would be "The variable of potato is equal to the value of buddy"
let potato = 'buddy';

// You can have as many variables as you wish
//however, you should probably use all the variables defined

//a prompt is a popup that asks for text
let breakfast = prompt('What do you like for Sunday Breakfast?');

alert('This user likes ' + breakfast);

let name = prompt('What is your name?');

//document.write write out the document that is calling this js file, the text that we are sending it
// in this case, we are sending it <h2> name <h2>

document.write('<h2>' + name + '</h2>');

// an alert is jsut a popup that tells you something

//ask the user to guess my favorit number

let answer = prompt('guess my favorite number');

let response = '';

// if statement 
// if statements tell us id something meets a condition 
// in JS... to get exact equivilent.. its a 'strict equal' (===)
if(answer > 11){
response = 'too high of a guess';
} else if(answer < 11){
    response = 'too low';
} else{
    response = 'you win!';
}

document.write(response);
