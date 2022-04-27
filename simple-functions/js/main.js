//---Easy
//create a function that subtracts two numbers and alerts the difference
function subNum(num1, num2){
  alert(num1 - num2)
}
subNum(5,6,7)
//create a function that divides three numbers and console logs the quotient
function divThree(num1, num2, num3){
  console.log(num1/num2/num3)
}
divThree(8,9,10)
//create a function that multiplys three numbers and returns the product
function multiThree(n1,n2,n3){
  return n1 * n2 * n3
}
multiThree(1,2,3)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoAndDivide(n1,n2,n3){
  return(n1+n2) % n3
}
addTwoAndDivide(3,4,5)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takeThree(n1,n2,n3,n4){
  let product1 = n1 * n2
  let sum1 = n3 + n4
  let diff1 = n3 % n4
  let multi3 = n1 * n2 * n3
  if (product1 > 100) {
    console.log(product1 + sum1)
  } else if (product1 < 100) {
    console.log(product1 - diff1)
  } else if (product1 = 100) {
    alert(multi3 / n4)
  }
}
takeThree(7,8,9,10)
