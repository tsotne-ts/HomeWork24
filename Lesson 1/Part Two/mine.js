var myName = prompt("Name:");
var mySurName = prompt("Surname:");
var myEmail = prompt("eMail:");
var myAge = prompt("Age:");
var mySex = prompt("Sex:");

if (
  isNaN(myName) &&
  isNaN(mySurName) &&
  isNaN(myEmail) &&
  !isNaN(myAge) &&
  isNaN(mySex)
) {
  var card = `My name is ${myName}<br>My surname is ${mySurName}<br>My email is ${myEmail}<br>I am ${myAge}'s old<br>${mySex}`;
  document.write(card);
} else {
  console.log("Values you've entered are wrong");
}
