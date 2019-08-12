//*****************************************************/
// Structural typing
// Languages like TypeScript, OCaml, Haskell, and Elm have primarily structural type systems.
//*****************************************************/

class Foo {
    method(input: string): number { return 10; }
}
class Bar {
    method(input: string): number { return 15; }
    methodStr(input: string): string { return 'Bar'; }
}

class Glass {
    method(input: string): string { return 'Teste'; }
}

let foo:   Foo = new Bar(); // Okay.
let glass: Foo = new Glass(); // Error. Method "Method"


// Here you can see a pseudo - example of a structural type system 
// passing when you’re trying to put a Bar where a Foo is required because 
// their structure is exactly the same.

//*****************************************************/
// Nominal typing 
// Languages like C++, Java, and Swift have primarily nominal type systems.
//*****************************************************/

// class Foo { method(input: string) { /* ... */ } }
// class Bar { method(input: string) { /* ... */ } }

// let foo: Foo = new Bar(); // Error!

//Here you can see a pseudo-example of a nominal type system 
//erroring out when you’re trying to put a Bar where a Foo is required because they have different names.