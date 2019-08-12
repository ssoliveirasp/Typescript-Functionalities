
import  AnimalZooMod  from "./ZooAnimalsMod";

class BirdMod implements AnimalZooMod {   //note that we need the *export* here to be able to acccess this class and instantiate objects of the Bird type
    skinType = "feather";
    isMammal() {
        return false;
    }
}

export default BirdMod;
