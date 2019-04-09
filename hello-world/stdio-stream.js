// This program will echo out everything that you type in the terminal

process.stdin.on('readable', () => {
	const chunk = process.stdin.read();

	if (chunk !== null) {
		process.stdout.write(chunk);
	}
});
