declare function create(o: object | null): void;
declare function createNum(o: number): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

createNum(1234); //Ok
createNum(0);   // Ok

createNum('Teste'); //Error
