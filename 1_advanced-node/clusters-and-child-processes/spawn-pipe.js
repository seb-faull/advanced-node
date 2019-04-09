const { spawn } = require('child_process');

// linux = the wc command counts lines, words and characters
const child = spawn('wc');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
	console.log(`child stdout:\n${data}`);
});
