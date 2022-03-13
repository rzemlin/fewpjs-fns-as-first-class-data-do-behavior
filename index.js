/* Given Code, don't edit */
document.querySelector("button").addEventListener("click", handleClick);

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").textContent = msg;
}

/* Write your implementation of greet() */
function greet(timeStr) {
  const hour = parseInt(timeStr, 10);
  if
   (timeStr < 0 || timeStr > 24)
    return 'Please enter a valid response'
     else
      if ( hour < 12) return "Good Morning"
      if ( hour > 17) return "Good Evening"
      return "Good Afternoon"
}