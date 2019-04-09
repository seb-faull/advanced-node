// The fork function is a variation on the spawn function for spawning node processes.
// The biggest difference between spawn and fork is that a communication channel is established to the child process
// when using fork.

process.on('message', (msg) => {
	console.log('Message from parent:', msg);
});

let counter = 0;

setInterval(() => {
	process.send({ counter: counter++ });
}, 1000);
