function addStrings(num1, num2) {
  num1 = Number(num1)
  num2 = Number(num2)
  return num1 + num2;
}

let result1 = addStrings("11", "123");
let result2 = addStrings("456", "77");
let result3 = addStrings("0", "0");

console.log(result1); // "134"
console.log(result2); // "533"
console.log(result3); // "0"
