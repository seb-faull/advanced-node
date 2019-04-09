/*
const func = () => {
	console.log('Hello after 4 seconds');
};

setTimeout(func, 4 * 1000);
*/

// ----------------------------

// const rocks = who => {
// 	console.log(who + ' rocks');
// };
//
// setTimeout(rocks, 2 * 1000, 'UK Garage');

// ----------------------------

// const oneFunc = delay => {
// 	console.log('Hello after ' + delay + ' seconds');
// };
//
// setTimeout(oneFunc, 4 * 1000, 4);
// setTimeout(oneFunc, 8 * 1000, 8);

// ----------------------------

// setInterval(
// 	() => console.log('Hello every 3 seconds'),
// 	3000
// );

// ----------------------------

let counter = 0;
const intervalId = setInterval(() => {
	console.log('Hello World');
	counter += 1;

	if (counter === 5) {
		console.log('Done');
		clearInterval(intervalId);
	}
}, 1000);
