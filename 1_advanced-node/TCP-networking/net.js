// process.stdout.write('\u001b[2J\u001B[0;0f');

const server = require('net').createServer();
let counter = 0;
let sockets = {};

// Library 'moment' is recommended to work with timestamps and timezones
function timestamp() {
	const now = new Date();
	return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {
	socket.id = counter++;

	console.log('Client connected');
	socket.write('Welcome new client! Please type your name: \n');

	socket.on('data', data => {
		if (!sockets[socket.id]) {
			socket.name = data.toString().trim();
			socket.write(`Welcome ${socket.name}!\n`);

			sockets[socket.id] = socket;
			return;
		}

		Object.entries(sockets).forEach(([key, clientSocket]) => {
			// if you are sending the message don't echo it back to yourself
			if (socket.id == key) return;

			clientSocket.write(`${socket.name}: ${timestamp()} `);
			clientSocket.write(data);
		});
	});

	// ctrl + d to disconnect
	socket.on('end', () => {
		delete sockets[socket.id];
		console.log('Client disconnected');
	});

	// comment out this line to see buffer as binary
	//socket.setEncoding('utf8');
});

server.listen(8000, () => console.log('Server bound'));

// Use net cat - nc locahost 8000
