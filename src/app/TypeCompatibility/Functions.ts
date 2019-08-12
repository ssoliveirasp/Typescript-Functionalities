type FuncType = (input: string) => number;

function func(input: string): number { return 10; }

let test: FuncType = func; // Okay.

//********************************************************
// Comparing two functions
//********************************************************

let funcX = (a: number) => 0;
let funcY = (b: number, s: string) => 0;

funcY = funcX; // OK
funcX = funcY; // Error

console.log(funcY(1,'teste').toString())
