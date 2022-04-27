//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {
  let numOfSnacks = Number(document.querySelector('input').value)
  for(let i = 1;i<= numOfSnacks; i++){
    document.querySelector('#stops').innerText += " Stahpit! "
  }
}


//target document, query the Selector id of #help. Add an event listener of Click, alongside the function: stopSnacking
//create function stopSnacking
//declare numOfSnacks, attach it to the selector Input, assign to whatever value is typed to the Input box. number(document etc) makes sure no weird strings arise
//create For Loop
//let increment = 1 ; if increment is <= numOfSnacks declared value, add one increment (1)
//select h2, querying the Selector id #stops. Funnel the text "Stahpit!" to the DOM when function is run
//SICK!

//p.s. don't call too many snacks, you'll clog up the event loop and seize up the browser