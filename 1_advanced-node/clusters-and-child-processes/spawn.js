// The spawn method does not create a shell, making it slightly more efficient than the exec method.
// This is ideal if the spawned data is big because it streams the data.

const { spawn } = require('child_process');
// const child = spawn('pwd');

// Best of two worlds:
// Shell mode
// const child = spawn('find . -type f', {
// 	stdio: 'inherit',
// 	shell: true
// });

// Different cwd
const child = spawn('find . -type f | wc -l', {
	stdio: 'inherit',
	shell: true,
	cwd: '/Users/sebfaull/Downloads'
});




// ------------
// const child = spawn('find', ['.', '-type', 'f']);
//
// child.stdout.on('data', (data) => {
// 	console.log(`child stdout:\n${data}`);
// });
//
// child.stderr.on('data', (data) => {
// 	console.error(`child stderr:\n${data}`);
// });
//
// child.on('exit', function(code, signal) {
// 	console.log(`child process exited with code ${code}, signal ${signal}`);
// });
