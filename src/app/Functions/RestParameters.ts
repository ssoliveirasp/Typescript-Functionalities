function buildNameRest(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

//
let employeeName = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName); //Returns Joseph Samuel Lucas MacKinzie

//
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

let employeeNameFun = buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie");

