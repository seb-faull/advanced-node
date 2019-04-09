const fs = require('fs');

// Use this when user requests from the server constantly
// Asynchronous Form:
fs.readFile(__filename, (err, data) => {
	if (err) throw err;
});


// Synchronous Form:
const data = fs.readFileSync(__filename);
