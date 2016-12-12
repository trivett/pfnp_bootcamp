/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
if that number is > 100, should return "congrats! you old af"
if invalid input given, return -1
******************/

function myAge( ageNow, numYears ) {
  // check that BOTH inputs are valid
  let ageLater = ageNow + numYears;
  if (typeof ageNow == "number" && typeof numYears == "number"){
  } else {
    return "Invalid input. Try again.";
  }

  if (ageLater > 100) {
    return "woooowww.";
  } else {
    return ageLater;
  }
}

// myAge("screwdriver", "elephant")









