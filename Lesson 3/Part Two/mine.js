var legA = Number(prompt("Choose a number for leg A"));
var legB = Number(prompt("Choose a number for leg B"));
var hypotenuse = Math.sqrt(legA * legA + legB * legB);

if (legA ** 2 + legB ** 2 === hypotenuse ** 2) {
  console.log("Right triangle hypotenuse is:", hypotenuse);
} else {
  console.log("Such Right Triangle doesn't exist");
}
