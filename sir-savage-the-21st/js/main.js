//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function twentyOneSavauge(){

  for (let i = 1; i<=21;i++) {
	   document.querySelector("#savageSays").innerText += " 21"
}
}
twentyOneSavauge()

//for, let increment = 1
//when each increment is less than or equal to 21, recur by established increment
//aka repeat 1 increment 21 times, then stop. EZ.
