function test(n) {
	return parseInt(n.toString(2).split('').reverse().join(''), 2);
}
console.log(test(100));
console.log(test(1134));