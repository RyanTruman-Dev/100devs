// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let bringItOnCringe = true
alert(bringItOnCringe)

// Declare a variable, reassign it to your favorite color, and console log the value

let favoriteColor = "vermillion"
favoriteColor = "green"
console.log(favoriteColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function addThreeDivFour(n1,n2,n3,n4){
  return (n1 + n2 + n3) / n4
}
addThreeDivFour(1,2,3,4)


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function takeTwo(n1,n2){
  console.log(n1 ** n2)
}
takeTwo(5,7)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function booString(b, str){
  if(b){
    alert(str)
  }else{
    console.log(str)
  }
}


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(n1){
  for(let i = 1; i <= n1; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz")
    }else if(i % 5 === 0){
      console.log("Buzz")
    }else if(i % 3 === 0){
      console.log("Fizz")
    }else{
      console.log(i)
    }
  }
}
fizzBuzz(15)
