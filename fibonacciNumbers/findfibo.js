/* eslint-disable linebreak-style */
/* eslint-disable no-alert *//* eslint-disable linebreak-style */
function fibofinder(n) {
  let previous = 0;
  let current = 1;
  let next = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= n; i++) {
    next = previous + current;
    previous = current;
    current = next;
  }
  return next;
}

const number = parseInt(prompt('Please enter your number to find fibonacci in this order'), 10);
alert(`Fibonacci number in this order is ${fibofinder(number)}`);
