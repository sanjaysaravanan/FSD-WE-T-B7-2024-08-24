// name of the function or variable should follow camelCase

/* function displayInfo() {
  console.log("Hello FSD-WE-T-B7");
  console.log("Your Mentor: Sanjay");
} */

// Parameterized function
function displayInfo(batchName, mentor) {
  console.log("Hello", batchName);
  console.log("Your Mentor:", mentor);
  return batchName + " By " + mentor;
}

// displayInfo();
const val = displayInfo("FSD-WE-T-B7", "Sanjay"); // calling the function
console.log(val);

// Default functions in a browser
// alert -> alert some information to the user
// alert("Hello Guys");

// confirm -> confirming the next steps from the user
const isAdult = confirm("Are You above age 18?");
console.log(isAdult);

if (isAdult) {
  console.log("Show 18+ contents");
} else {
  console.log("Your not allowed");
}

// prompt - Getting inputs from the user
const name = prompt("Please enter Your name");
console.log(name);
