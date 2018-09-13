// hello("what") -> "Hello, world!"
// hello() -> "Hello, world!"
function hello() {
	return "Hello, world!"
}


// show(4) ->
// show(-4) ->
function show(x) {
	console.log(`${x} ${x * x}`)
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x
}

// function show(4) {
// 	console.log(`${4} ${4 * 4}`)
// 	return  16
// 	console.log(`${4} ${4 * 4 * 4}`)
// 	return 4 64
// }

// function show(-4) {
// 	console.log(`${-4} ${-4 * -4}`)
// 	return  -4 16
// 	console.log(`${-4} ${-4 *- 4 *- 4}`)
// 	return  -4 -64
// }





// eq3() ->  1
// eq3(1, 2, 3) -> 0
// eq3("1", 1, 3) -> 0
// eq3("!", "a", "b") -> 0
// eq3("!", "!", !) -> erro

function eq3(a, b, c) {
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}

// Resultado: 9 e 11
function sum(x) {
	return x + 2
}
const x = 5
console.log(`${sum(x + 2)}, ${sum(sum(x + 2))}`)


// Resultado: 
function confusion(x, y) {
	x = 2 * x + y
	return x
}
let x = 2
let y = 5
y = confusion(y, x)
x = confusion(y, x)
console.log(`${x}, ${y}`)