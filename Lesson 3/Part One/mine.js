var valueX = Number(prompt("Choose number for X"));
var valueY = Number(prompt("Choose number for Y"));
var valueZ = Number(prompt("Choose number for Z"));
var result = 2 * valueX + 3 * valueY + valueZ;

if (!isNaN(valueX) && !isNaN(valueY) && !isNaN(valueZ)) {
  console.log("The result is:", result);
} else {
  console.log("Please choose valid values");
}
