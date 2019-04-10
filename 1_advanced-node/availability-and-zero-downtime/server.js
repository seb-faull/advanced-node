const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
	for (let i=0; i<1e7; i++); // simulate CPU work
	res.end(`Handled by process ${pid}`);
}).listen(8080, () => {
	console.log(`Started process ${pid}`);
});

/*
// Simulate a random crash with a timer.
// The master can be notified using the exit event on the cluster object.
setTimeout(() => {
	process.exit(1) // death by random timeout
}, Math.random() * 10000);
*/
