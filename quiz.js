var countEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');



function countdown() {
  var timeLeft = 60;
  // We are not using a for loop to decrement the timer by 1
  // We are using setInterval to decrement it by 1 every second
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      countEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      countEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      countEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      // clear Interval is a built in function for JS
      // you can call it with any declared setInterval function
      // and what it does is it stops that setInterval from firing again
      // stops timeInterval from happening again every second
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

startBtn.onclick = countdown;
