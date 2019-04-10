const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
	const cpus = os.cpus().length;
	for (let i = 0; i < cpus; i++) {
		cluster.fork();
	}
	console.log(`Master PID: ${process.pid}`);

	// Register a handler for the exit event and fork a new worker process when it crashes.
	cluster.on('exit', (worker, code, signal) => {
		// This check is important as it checks that it was not manually disconnected.
		if (code !== 0 && !worker.exitedAfterDisconnect) {
			console.log(`Worker ${worker.id} crashed. ` +
									'Started a new worker...');
			cluster.fork();
		}
	});

	process.on('SIGUSR2', () => {
		const worker = Object.values(cluster.workers);

		const restartWorker = (workerIndex) => {
			const worker = workers[workerIndex];
			if (!worker) return;

			worker.on('exit', () => {
				if (!worker.exitedAfterDisconnect) return;
				console.log(`Exited process ${worker.process.pid}`);
				cluster.fork().on('listening', () => {
					restartWorker(workerIndex + 1);
				});
			});

			worker.disconnect();
		};

		restartWorker(0);
	});

} else {
	require('./server');
}
