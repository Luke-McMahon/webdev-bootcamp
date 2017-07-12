var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");

var p1Span = document.getElementById("p1Score");
var p2Span = document.querySelector("#p2Score");
var h1 = document.querySelector("h1");
var winningScoreSpan = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		if(p1Score >= winningScore)
		{
			p1Span.classList.add("winner");
			gameOver = true;
		}
		p1Span.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		if(p2Score >= winningScore)
		{
			p2Span.classList.add("winner");
			gameOver = true;
		}
		p2Span.textContent = p2Score;
	}
});

function reset() {
	gameOver = false;
	p2Score = p1Score = 0;
	p2Span.textContent = p2Score;
	p1Span.textContent = p1Score;
	p1Span.classList.remove("winner");
	p2Span.classList.remove("winner");
}

resetButton.addEventListener("click", function() {
	reset();
});

numInput.addEventListener("change", function() {
	winningScoreSpan.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});