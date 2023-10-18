var playGame = confirm("Do you want to play a game?");
if (playGame) {
  var counter = 0;
  var q1 = prompt(
    "The longest river in the world is: Nile, Amazon, Congo, Missouri"
  );
  var q2 = prompt(
    "The Capital of Georgia is: Batumi, Rustavi, Tbilisi, Kutaisi"
  );
  var q3 = prompt("WW2 began in: 1989, 2001, 1918, 1945");

  if (q1 === "Nile") {
    counter++;
  }
  if (q2 === "Tbilisi") {
    counter++;
  }
  if (q3 === "1945") {
    counter++;
  }
  console.log("You've scored:", counter);
} else {
  console.log("Game over.");
}
