//Create an array of movies with at least three movies.
let bestMovies = ['Jurassic Park','Mars Attacks','The Patriot']
//Using the array from above, store the first movie in a variable
let firstFlick = bestMovies[0]
//Get the length of the original array and store it in a new variable
let numOfMovies = bestMovies.length
console.log(numOfMovies)
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastMovie = bestMovies[ numOfMovies - 1]
alert(lastMovie)
