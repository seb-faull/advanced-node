/*
	It's a good idea to install nodemon globally to see changes without
	having to restart the sever manually.

	'npm i -g nodemon' - Terminal
*/

// We are requiring node's built in http API
// If we wanted to require in 'express' we will have to run 'npm i' in terminal
const http = require('http');

const requestListener = (req, res) => {
	console.dir(req, { depth: 0 });
	res.end('Hello World\n');
};

// const server = http.createServer(requestListener);
const server = http.createServer(requestListener);
server.on('request', requestListener);

server.listen(4242, () => {
	console.log('Server is running...');
});
