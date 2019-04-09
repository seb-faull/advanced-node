// The fork function is a variation on the spawn function for spawning node processes.
// The biggest difference between spawn and fork is that a communication channel is established to the child process
// when using fork.

const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
	console.log('Message from child', msg);
});

forked.send({ hello: 'world' });
