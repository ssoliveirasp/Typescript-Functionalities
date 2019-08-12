import { ReptileMod } from './ZooWildMod';
import { BirdMod } from './ZooBirdsMod';

//Without Alias
let parrot = new ReptileMod;
console.log(parrot.isMammal());

//With Alias
let myBird = new BirdMod();
console.log(myBird.isMammal());

