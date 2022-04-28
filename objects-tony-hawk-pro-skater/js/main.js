//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawk(boardLength,boardColor, boardWheels, trick){
	this.length = boardLength
	this.color = boardColor
	this.wheel = boardWheels
  this.trick = trick
  this.ost = 'Dead Kennedys'
	this.signatureMove = function(){alert('360 Shove-it!')}
  this.shoveIt = function(){alert(`Check out this ${this.signatureMove} !`)}
  this.soundTrack = function(){alert(this.ost)}
}

let ryanTruman = new
TonyHawk('Longboard', 'Black', 'Yellow', 'Kickflip')
