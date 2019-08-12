//***********************************/
// Create method accepting interface #1
//***********************************/
interface SearchFunc {
    (source: string, 
     subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

//***********************************/
// Create method accepting interface #2
//***********************************/
interface squareDescription {
   (name: string,
    size: number): void;
}

let funcSquare: Function = (square: squareDescription) => {
  return square.name;
};

let square = {
    "name":"a square",
    "size": 20
}

let _return = funcSquare(square);

console.log(_return);

//***********************************/
// Declare Functions #3
//***********************************/
let colorChange: Function = (elem: Element, color: string) : boolean => {
  elem.style.backgroundColor = color;
  return true;
}