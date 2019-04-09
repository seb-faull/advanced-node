const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', 'kjfskd', '.npmrc'];

// Error
/*
files.forEach(file => {
	const filePath = path.resolve(process.env.HOME, file);
	const data = fs.readFileSync(filePath);
	console.log('File data is:', data);
});
*/

// Try / Catch Condition
// files.forEach(file => {
// 	try {
// 		const filePath = path.resolve(process.env.HOME, file);
// 		const data = fs.readFileSync(filePath/*, 'utf-8'*/);
// 		console.log('File data is:', data);
// 	} catch (err) {
// 		console.log('Something went wrong and we are going to ignore it');
// 	}
// });

// Throw Condition
files.forEach(file => {
	try {
		const filePath = path.resolve(process.env.HOME, file);
		const data = fs.readFileSync(filePath, 'ogoiuo');
		console.log('File data is:', data);
	} catch (err) {
		if (err.code === 'ENOENT') {
			console.log('File not found');
		} else {
			throw err;
		}
	}
});
