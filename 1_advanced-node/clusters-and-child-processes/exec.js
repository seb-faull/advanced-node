// The exec method does create a shell and buffers the command's generated
// output and pass the whole value to a callback function.
// If you need to execute a file without using a shell the exec function is what you need.
// File clobbing and I/O functions are not supported.

const { exec } = require('child_process');

exec('find . -type f | wc -l', (err, stdout, stderr) => {
	if (err) {
		console.error(`exec error: ${err}`);
		return;
	}

	console.log(`Number of files ${stdout}`);
});
