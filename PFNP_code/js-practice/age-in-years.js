/******************
Calculate how old you will be in N years

This function will tell you your age in N years

takes in two args, ageNow and numYears
should return a number that tells you how old you'll be in numYears
******************/

const monthsInYear = 12;

function myAge( ageNow, numYears ) {
  let sum = ageNow + numYears;
  return sum;
}

var lastBirthdayIWillEverCelebrate = myAge(32, 7);




// myAge(32, 7) => 39
