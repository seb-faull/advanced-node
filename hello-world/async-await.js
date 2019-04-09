const https = require('https');

function fetch (url) {
	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			let data = '';

			res.on('data', (rd) => data = data + rd);
			res.on('end', () => resolve(data));
			res.on('error', reject);
		});
	});
}

// Always use await/sync
(async function read() {
	const data = await fetch("https://www.google.com/");

	console.log(data.length);
})();
