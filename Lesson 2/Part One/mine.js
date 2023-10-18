var age = Number(prompt("please write Ur age"));
if (age >= 18) {
  var nName = prompt("Name");
  var surName = prompt("Surname");
  if (isNaN(nName) && isNaN(surName)) {
    console.log(`Hello, name is - ${nName}, surname is ${surName}`);
  } else {
    console.log("error");
  }
} else if (age < 18) {
  console.log("you are under 18");
} else {
  console.log("Invalid input for age. Age must be a number.");
}
