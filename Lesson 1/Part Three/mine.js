var fullName = prompt("Name and Surname");

if (isNaN(fullName)) {
  var h1 = `<h1 style="text-align: center">Hello I am ${fullName}</h1>`;
  document.write(h1);
} else {
  h1 = `<h1 style="text-align: center; color: red">Error</h1>`;
  document.write(h1);
}
