document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
if (day === "tuesday" || day === "thursday"){
  alert("It is Class Day")
} else if (day === "saturday" || day === "sunday"){
  console.log("It is the weekend")
} else console.log("Boring-ass day")

}
