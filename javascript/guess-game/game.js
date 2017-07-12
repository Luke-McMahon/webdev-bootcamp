var secretNumber = 4;
var guess = prompt("Guess a number.");

if(Number(guess) === secretNumber) {
	alert("Correct!");
} else {
	alert("Try again!");
}