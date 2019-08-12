
class Employee {
    private _fullName: string;
    private passcode = "secret passcode";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (this.passcode && this.passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}