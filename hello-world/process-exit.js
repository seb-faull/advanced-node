// This program shows the power of Node's asynchronous natue

setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
	console.log('Process will exit now. See you later!');
});

console.log('Hello!');
