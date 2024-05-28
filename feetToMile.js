function feetToMile(feet) {

var mile = feet / 5280;
return mile;

}

var number = feetToMile(10560);

result = number.toFixed(2);
console.log("Mile is: ", result);