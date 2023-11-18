const fs = require('fs');
const filePath = "./1-counter.js";

fs.readFile(filePath, 'utf-8', (err, data) => {
	if (err) {
		console.error('Error reading the file: ', err);
	}
	console.log('File Contents: ', data);
});

let counter = 0;
for (let i = 0; i < 100; ++i) {
	counter++;
}
console.log(counter);
