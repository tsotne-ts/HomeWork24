var sideOne = Number(prompt("Enter number for side 1"));
var sideTwo = Number(prompt("Enter any number for side 2"));
var sideThree = Number(prompt("Enter any number for side 3"));
if (
  sideOne + sideTwo > sideThree &&
  sideOne + sideThree > sideTwo &&
  sideTwo + sideThree > sideOne
) {
  console.log("Perimeter for this triangle is:", sideOne + sideTwo + sideThree);
} else {
  console.log("Such triangle doesn't exist");
}
