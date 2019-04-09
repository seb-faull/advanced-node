const cluster = require('cluster');
const os = require('os');

// **** MOCK DB CALL
const numberOfUsersInDB = function() {
	this.count = this.count || 5;
	this.count = this.count * this.count;
	return this.count;
}
// ****

if (cluster.isMaster) {
	const cpus = os.cpus().length;

	console.log(`Forking for ${cpus} CPUs`);
	// Create as many workers as CPUs
	for(let i=0; i < cpus; i++) {
		cluster.fork();
	}

	// Broadcast messages to all workers.
	const updateWorkers = () => {
		const usersCount = numberOfUsersInDB();

		console.dir(cluster.workers, { depth: 0 });
		Object.values(cluster.workers).forEach(worker => {
			worker.send({ usersCount });
		});
	};

	updateWorkers();
	setInterval(updateWorkers, 10000);

} else {
	require('./server');
}
