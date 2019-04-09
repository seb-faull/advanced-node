console.log('Current user is', process.env.USER);

console.log('\nScript executed with:');


/*
In terminal:
	export VAL1=100
	export VAL2=200
	OR VAL1=10 VAL2=20 node custom-env-variables.js
*/
console.log('VAL1 equal to:', process.env.VAL1);
console.log('VAL2 equal to:', process.env.VAL2);

// Try this out: node -p "process.argv" hello 42
// node, enter, process, enter
