const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const { Transform } = require('stream');

const progress = new Transform({
	transform(chunk, encoding, callback) {
		process.stdout.write('.');
		callback(null, chunk);
	}
});

fs.createReadStream(file)
	.pipe(crypto.createDecipher('aes192', 'a_secret'))
	.pipe(zlib.createGunzip())
	//.on('data', () => process.stdout.write('.'))
	.pipe(progress)
	.pipe(fs.createWriteStream(file.slice(0, -3))) // .gz = zip ... zz = encrypted
	.on('finish', () => console.log('Done'));

	// node unzip-transform.js test.file.zz
