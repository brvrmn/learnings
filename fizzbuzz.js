// Eloquent JS, Chapter 2, exercise 2

var printThis = "";
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0) printThis += "Fizz";
  if (i % 5 == 0) printThis += "Buzz";
  console.log(printThis || i);
  printThis = "";
}