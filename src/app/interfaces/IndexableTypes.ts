interface StringArray {
    [index_w: number]: string;
    length: number;    // ok, length is a number
}

interface numberArray {
    [index: number]: number;
}

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let myArray: StringArray;
myArray = ['Bob', 'Lowca'];
let myStr: string = myArray[0];

let myNumber: numberArray;
myNumber = [123,564];
let myNum: number = myNumber[0];

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

console.log(myStr);
console.log('myArray.length: ' + myArray.length);
console.log(myNum);