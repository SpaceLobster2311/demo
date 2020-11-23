'use strict' 

function Buyps5(){
  let ps5 = '';
  let answer = prompt('How many Playstations should you buy? 1-10?')
  
   for(let i=1; i < 6; i++ ) {
    ps5 = ps5 + '<li> <img class="ps5" src="https://cdn.mos.cms.futurecdn.net/8H5ZqSzzZGPn8sWXGZcTeK-970-80.png"></img></li>';
   }
   return ps5;
  }