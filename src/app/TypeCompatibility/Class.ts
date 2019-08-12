// Classes work similarly to object literal types and interfaces with one exception: 
// they have both a static and an instance type.
// When comparing two objects of a class type, 
// only members of the instance are compared.
// Static members and constructors do not affect compatibility.

class Animaltc {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number; //only members of the instance are compared.
    static staticVariable: number; //Static members don't affect compatibility
    constructor() { } // Constructor class don't affect compatibility
}

let a: Animaltc;
let s: Size;

a = s;  //OK
s = a;  //OK