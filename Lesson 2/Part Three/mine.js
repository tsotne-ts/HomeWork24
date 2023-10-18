var valueOne = Number(prompt("Enter any number"));
var valueTwo = Number(prompt("Enter any number"));
var method = prompt("Choose the operation method: + or - or * or /");
if (method === "+") {
  var result = valueOne + valueTwo;
  console.log(result);
} else if (method === "-") {
  result = valueOne - valueTwo;
  console.log(result);
} else if (method === "*") {
  result = valueOne * valueTwo;
  console.log(result);
} else if (method === "/") {
  result = valueOne / valueTwo;
  console.log(result);
} else {
  console.log("Error, you must choose only + or - or * or /");
}
