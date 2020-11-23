'use strict' 
let i = 0
function hello(){
for(i = 1; i< 6; i++){
    let num0 = prompt('How many playstations should you buy');
  while(isNaN(num0)){
    num0 = prompt('Please enter a real number')
  }
    let num1 = parseInt(num0)
    if(num1 > 5){
      console.log('lower')
    }
    if(num1 < 5){
      console.log('higher')
    }
    if(num1 === 5){
      console.log('nice')
      '<li> <img src="https://cdn.mos.cms.futurecdn.net/8H5ZqSzzZGPn8sWXGZcTeK-970-80.png"></li>';
      break;
    }
  if(i === 5){
    console.log('you fail')
    break;
  }
  }
}
hello()
