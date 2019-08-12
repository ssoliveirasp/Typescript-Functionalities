//********************************************************
// Exemplo 1
//********************************************************

interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;

p = new Person(); // OK, because of structural typing

//********************************************************
// Exemplo 2
//********************************************************

interface Named {
    name: string;
    email: string;
}
let x: Named;

// y's inferred type is { name: string; location: string; }
let y = { name: "Alice", location: "Seattle", email: "e@e.com" };

x = y;

function greet(n: Named) {
    console.log(x.name)      //OK //Print 'Alice'
    console.log(x.email)     //OK //Print 'e@e.com'
    console.log(x.location)  //Error 
}
greet(x); // OK

