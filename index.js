function wakeDog(dogName, dogBreed) {
    let str = `Wake ${dogName} the ${dogBreed}`;
    return str
}

function leashDog(dogName, dogBreed) {
    let leashDogStr = `Leash ${dogName} the ${dogBreed}`;
    return leashDogStr
}

function walkToPark(dogName, dogBreed) {
    let walkToParkStr = `Walk to the park with ${dogName} the ${dogBreed}`;
    return walkToParkStr
}

function throwFrisbee(dogName, dogBreed) {
   let throwFrisbeeStr = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return throwFrisbeeStr
}

function walkHome(dogName, dogBreed) {
    let walkHomeStr = `Walk home with ${dogName} the ${dogBreed}`;
    return walkHomeStr
}

function unleashDog(dogName, dogBreed) {
    let unleashDogStr = `Unleash ${dogName} the ${dogBreed}`;
    return unleashDogStr
}


let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed))
}