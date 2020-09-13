function wakeDog(dogName, dogBreed){
    return (`Wake ${dogName} the ${dogBreed}`)    
}

function leashDog(dogName, dogBreed){
   return (`Leash ${dogName} the ${dogBreed}`)
}

function walkToPark(dogName, dogBreed){
   return (`Walk to the park with ${dogName} the ${dogBreed}`)
}

function throwFrisbee(dogName, dogBreed){
   return (`Throw the frisbee for ${dogName} the ${dogBreed}`)
}

function walkHome(dogName, dogBreed){
   return (`Walk home with ${dogName} the ${dogBreed}`)
}

function unleashDog(dogName, dogBreed){
   return (`Unleash ${dogName} the ${dogBreed}`)
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

// function exerciseDog(dogName, dogBreed){
//     let message = []
//     for (let i=0; i < routine.length; i++){
//         let currentfn = routine[i](dogName,dogBreed)
//         message.push(currentfn)
//     }
     
//     return message
// }

function exerciseDog(dogName, dogBreed){
       let message = []
       routine.forEach(element => message.push(element(dogName, dogBreed)) )
       return message
}







// let arr = [10, 9, 8, 7, 6]

// arr.forEach( function(element, idx, originalArray){
//     console.log("ELEMENT:", element)
//     console.log("INDEX:", idx)
//     console.log("ORIGINAL", originalArray)
// } )

// arr.forEach( (element,idx,originalArray) => {
//    console.log("ELEMENT:", element)
//   console.log("INDEX:", idx)
//   console.log("ORIGINAL", originalArray)
// } )




