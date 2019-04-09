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
	.pipe(zlib.createGzip())
	//.on('data', () => process.stdout.write('.'))
	.pipe(crypto.createCipher('aes192', 'a_secret'))
	.pipe(progress)
	.pipe(fs.createWriteStream(file + '.zz')) // .gz = zip ... zz = encrypted
	.on('finish', () => console.log('Done'));

// node zip-transform.js test.file
// rm test.file
// gunzip test.file.gz
