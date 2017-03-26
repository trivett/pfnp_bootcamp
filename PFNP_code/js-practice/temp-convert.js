
function celsiusToFarenheit(celsius){
  let farenheit = celsius * (9 / 5) + 32;
  console.log(farenheit);
}

function celsiusToFarenheit(celsius){
  let farenheit = celsius * (9 / 5) + 32;
  return farenheit;
}

var farenheitBoilingPoint = celsiusToFarenheit(100);

farenheitBoilingPoint // undefined
