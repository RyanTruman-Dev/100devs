//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.color = 'black'
stopwatch.brand = 'rolex'
stopwatch.band = 'leather'
stopwatch.hands = 'digital'

stopwatch.start = function(){ console.log('STARTING')}
stopwatch.stop = function(){ console.log('STOPPING')}
stopwatch.sayBrand = function(){
  alert(stopwatch.brand)
}
