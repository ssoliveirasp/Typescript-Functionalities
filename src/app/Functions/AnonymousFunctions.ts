//********************************/
// anonymous and Named function.
//********************************/

// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x+y; };

//Just as in JavaScript, functions can refer to variables outside of the function body.
//When they do so, they're said to capture these variables.
let z = 100;

function addToZ(x, y) {
    return x + y + z;
}

//using a fat arrow (=>) 
let myAddArrow: (baseValue: number, increment: number) =>
    number = function(x: number, y: number): number { return x + y; };