// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Halloween".toUpperCase()
console.log(favHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "strings"
alert(str.slice(-3))

//the following method is inaccurate, as it alerts each element separately, as opposed to one alert for all three.
// alert(str.charAt(4))
// alert(str.charAt(5))
// alert(str.charAt(6))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fivNum(n1,n2,n3,n4,n5){
  hunnit = 100 - n1 - n2 - n3 - n4 - n5
  alert(Math.abs(hunnit))
}
fivNum(22,33,44,55,66)
//Math.abs() for absolute value, thank you Google.
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNum(n1,n2,n3){
  console.log(`The lowest if ${Math.min(n1,n2,n3)} and the highest is ${Math.max(n1,n2,n3)}`)
}
threeNum(11,21,31)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function coinFlip(){
//   const random = Math.random()
//   if(random < .5){
//     return "heads"
//   } else{
//     return "tails"
//   }
// }
  return Math.random() < .5 ? 'heads' : 'tails'
}

console.log(coinFlip())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function oneNum(n1){
  for(let i = 1; i <= n1; i++){
    let flippy = coinFlip()
    console.log(flippy)
  }
}
oneNum(5)
