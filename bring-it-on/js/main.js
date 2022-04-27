// *Variables*
// Create a variable and console log the value
let yoyo = 4
  console.log(yoyo)

// Create a variable, add 10 to it, and alert the value
let stringCheese = 5
stringCheese = stringCheese + 10
//or stringCheese += 10
alert(stringCheese)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(num1, num2, num3, num4){
  let diff = (num1 - num2 - num3 - num4)
  alert(diff)
}
sub4(5,6,7,8)
//OR function subFourAlert(n1,n2,n3,n4)
  //alert(n1-n2-n3-n4)    easier.

// Create a function that divides one number by another and returns the remainder
function div1(num1, num2){
  return num1 % num2
}
div1()
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function twoNum(num1, num2){
  let sum = num1 + num2
  if (sum > 50){
    alert("Jumanji")
  }
}
twoNum(49,2)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiThree(num1, num2, num3){
  let product = num1 * num2 * num3
  if (product % 3 === 0){
    alert("ZEBRA")
  }
}
multiThree(55,55,55)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in


function numWord(word1, num1){
  for(i = 1; i<=num1; i++){
    console.log(word1)
  }
}
numWord("hell yeah", 55)


//create function numWord, store word1 and num1
//create forLoop, interval = 1 ... when interval is less than or equal to num1, add 1
//when loop is completed, log word1 "hell yeah"
