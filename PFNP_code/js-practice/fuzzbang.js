// Use your JavaScript knowledge to solve this puzzle:

// 1. Count up from one to 100 and console log each number
// 2. Introduce some logic so that if a number is divisible by 3, it prints 'fuzz' instead of the number
// 3. Introduce more logic so that if a number is divisible by 5, it prints 'bang' instead of the number
// 4. Finally, if a number is divisible by both 3 and 5, print 'fuzzbang'.

// Good luck!

for(var i = 1; i<=100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("fuzzbang");
  } else if (i % 5 === 0){
    console.log("bang");
  } else if (i % 3 === 0){
    console.log("fuzz");
  } else {
    console.log(i);
  }
}


1
2
fuzz
4
bang
fuzz
7
8
fuzz
bang
11
fuzz
13
14
fuzzbang
