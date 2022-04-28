//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let myShows = ["mash", "familyguy", "startrek"]
myShows.forEach((show, chickenButt) => console.log(show, chickenButt))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1,2,3,4,5]
function onlyEvens(arr){
  return arr.filter(num => num % 2 === 0)
}
console.log(onlyEvens(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function numArr(arrTwo){
  let sorted = arrTwo.sort((a,b)=>a-b)
  alert(sorted[1] + sorted[sorted.length - 2] )
}
numArr([2,3,4,5,1])
