// To get the same code working, we'll need to use a type assertion:

let pet = getSmallPet();

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

//
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

// Type Guard Fish and Bird
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

function getSmallPet(): Fish | Bird {

}

// Literal Type Guard
// You can use === / == / !== / != to distinguish between literal values
type TriState = 'yes' | 'no' | 'unknown';

function logOutState(state:TriState) {
  if (state == 'yes') {
    console.log('User selected yes');
  } else if (state == 'no') {
    console.log('User selected no');
  } else {
    console.log('User has not made a selection yet');
  }
}
