//Write your pseduo code first!
// need a form input
// need a button
//
// need function to convert numbers at a factor of 1 to * 2 + 30 for F to C, or - 30 / 2 for C to F
//
// get value from the input
// convert it
// display value




document.querySelector('#zebra').addEventListener('click', convert)

function convert() {
  const celsius = document.querySelector('#tempCheck').value
  const convertedValue = celsius * 9/5 + 32
  console.log(convertedValue)
  document.querySelector('#talkThatTalk').innerText = convertedValue
}
