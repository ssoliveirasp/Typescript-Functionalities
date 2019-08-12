import AnimalZooMod from "./ZooAnimalsMod";

class ReptileMod implements AnimalZooMod { //note that we need the *export* here to be able to acccess this class and instantiate objects of the Reptile type
    skinType = "scales";
    isMammal() {
        return false;
    }
}

export default ReptileMod;
