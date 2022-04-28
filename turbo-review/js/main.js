// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "  Whisky"
favDrink = favDrink.trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let whiskies = "Ardbeg Lagavullin Laphroaig apple"
if(whiskies.search("apple") !== -1){
  console.log("yes")
}else{
  console.log("no")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
//
function janKen(){
let random = Math.random()
if(random < .3333){
  return "rock"
}else if (random < .6666){
  return "paper"
}else{
  return "scissors"
}
  // return Math.random() < .3333 ? 'rock' : 'paper' : 'scissors' does not apply for 33% - look into this
}

console.log(janKen())

// // *Conditionals*
// //Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice){
  botChoice = janKen()
  choice = janKen()
  if((choice === "rock" && botChoice === "scissors") || (choice ==="paper" && botChoice === "rock") || (choice === "scissors" && botChoice === "paper")){
    console.log("you win!")
  }else if((choice === "paper" && botChoice === "scissors") ||(choice === "scissors" && botChoice === "rock") ||(choice === "rock" && botChoice === "paper")){
    console.log("you lose!")
  }else{
    console.log("tie!")
  }
}
checkWin()
// NOTE: you don't have to code the losing conditions, you can just }else if the choice = botChoice, tie... else "you lose!"
// code smart not hard Ryan.

// //*Loops*
// //Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame(arr){
  arr.forEach((choice) => {
    checkWin(choice)
  })
}
playGame(['rock', 'paper', 'paper'])
