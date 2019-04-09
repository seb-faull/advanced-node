const fs = require('fs');
const server = require('http').createServer();
const data = {};

server.on('request', (req, res) => {
	switch (req.url) {
		case '/api':
			res.writeHead(200, { 'Content-Type': 'application/json'});
			res.end(JSON.stringify(data));
			break;
		case '/home':
		case '/about':
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(fs.readFileSync(`.${req.url}.html`));
			break;
		case '/':
			res.writeHead(301, { 'Location': '/home' });
			res.end();
			break
		default:
			res.writeHead(404);
			res.end();
	}
});

server.listen(8000);
// curl localhost:8000/home
// node -> http.STATUS_CODES
// node -> url.parse('https://www.reddit.com/search?q=gsdfg')
