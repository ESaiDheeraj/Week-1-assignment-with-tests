function counter(count) {
	console.clear();
	count++;
	console.log(count);
	setTimeout(function() {
		counter(count);
	}, 1000);
}

counter(0);
