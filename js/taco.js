'use strict'


function credentials(){
let name = prompt('Whatup my dude? What\'s your name?');
let age = prompt('And your age, my dude?');
let answer = prompt('okay cool... so you\'re ' + name + ' and your ' + age + '? (Y/N)');
if(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes'){
   return 'Hello ' + name + ' who is ' + age + ' years old';

}
}

