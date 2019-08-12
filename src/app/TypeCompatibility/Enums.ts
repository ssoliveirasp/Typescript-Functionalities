// Enums are compatible with numbers, and numbers are compatible with enums. 
// Enum values from different enum types 
// are considered incompatible.

enum Status { Ready, Waiting };
enum Color  { Red, Blue, Green };

let myStatus = Status.Ready;
myStatus = Status.Waiting; //ok
myStatus = Color.Red;      //error