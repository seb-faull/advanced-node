// const server = require('http').createServer();
const fs = require('fs');
const server = require('https').createServer({
	// Generate a certificate by opening the openssl tool kit - man openssl
	// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./cert.pem'),
});

server.on('request', (req, res) => {
	res.writeHead(200, { 'content-type': 'text/plain' });
	res.end('Hello world\n');
});

server.listen(443); // 443 is default for https communication
