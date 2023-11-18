let counter = 0;

function timer() {
	console.clear();
	counter++;
	console.log(counter);
}

setInterval(timer, 1000);
