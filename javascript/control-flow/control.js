function one() {
	var i = -10;
	while(i <= 19) {
		console.log(i);
		i++;
	}
}

function two() {
	var i = 10;
	while(i <= 40) {
		if(i % 2 == 0) 
			console.log(i);
		i++;
	}
}

function three() {
	var i = 300;
	while( i <= 333) {
		if(i % 2 == 0) 
			console.log(i);
		i++;
	}
}

function four() {
	var i = 5;
	while(i <= 50){
		if(i % 3 == 0 && i % 5 == 0)
			console.log(i);
		i++;
	}
}

var answer = prompt("are we there yet?");
while(answer.indexOf("yes") == -1 || answer.indexOf("yeah") == -1 ) {
	answer = prompt("are we there yet?");
}
alert("we made it!");


// one();
// two();
// three();
// four();
// annoy();