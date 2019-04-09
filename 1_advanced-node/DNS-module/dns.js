const dns = require('dns'); // name -- adresses

// dns.lookup('reddit.com', (err, address) => {
// 	console.log(address);
// });

// dns.resolve4('reddit.com', (err, address) => {
// 	console.log(address);
// });

// dns.resolveMx('reddit.com', (err, address) => {
// 	console.log(address);
// });

dns.reverse('185.88.181.59', (err, hostnames) => {
	console.log(hostnames);
});
