
import rep = Zoo.Reptile;
import brd from './ZooBirds';

//Without Alias
let parrot = new Zoo.Bird();
console.log(parrot.isMammal());

//With Alias
let myBird = new brd();
console.log(myBird.isMammal());

