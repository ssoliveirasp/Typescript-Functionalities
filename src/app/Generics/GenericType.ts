//loggingIdentity
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

// Identity
function identity1<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity1;