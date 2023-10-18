var nName = prompt("Please write Ur name");
var surName = prompt("Please write Ur surname");
var age = Number(prompt("please write Ur age"));

if (!isNaN(age)) {
  console.log(
    `Your name is ${nName}\nYour surname is - ${surName}\nYour age is - ${age}`
  );
} else {
  console.log("Invalid input for age. Age must be a number.");
}
