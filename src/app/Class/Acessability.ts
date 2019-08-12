class A {
    private x: number;
    protected y: number;
    readonly name: string = 'wolf';
    constructor (theName: string) {
        this.name = theName;
    }
    static f(a: A, b: B) {
        a.x = 1; // Ok
        b.x = 1; // Ok
        a.y = 1; // Ok
        b.y = 1; // Ok
    }
}
class B extends A {
    constructor(theName: string) {
        super(theName);
        this.name = theName; //Error
    }
    static f(a: A, b: B) {
        a.x = 1; // Error, x only accessible within A
        b.x = 1; // Error, x only accessible within A
        a.y = 1; // Error, y must be accessed through instance of B
        b.y = 1; // Ok
        this.name = 'John Wickie'; //Error: Acessible through Constructor
    }
}
