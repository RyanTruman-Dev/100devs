//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.color = "black"
mouse.rgbLight = "green"
mouse.brand = "razer"
mouse.model = "deathAdder"
mouse.lightSensor = true

mouse.leftClick = function(){
  console.log("Click left")
}
mouse.rightClick = function(){
  console.log("Click right")
}
mouse.scrollWheel = function(){
  console.log("Jump")
}
