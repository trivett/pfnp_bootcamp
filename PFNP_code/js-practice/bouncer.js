// Make a function that accepts one argument "age" and return to the user whether they are allowed in the bar.

function bouncer(age, legalAge){
  return age >= legalAge
}

function bouncer(age, legalAge){
  // age = 21, legalAge = 20
  if (age <= legalAge){
    return false
    //refuse entry
  }else{
    //allowed
    return true
  }

}

console.log(bouncer(22, 21)) // this should return true
console.log(bouncer(20, 21)) // this should return false
console.log(bouncer(19, 18)) // this should return true



// What if the drinking age was different in different places? Re-do the function so that it can take two arguments. Use yr noggin.
