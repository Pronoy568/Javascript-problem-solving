// Task 1 : Create a function that takes a string as input and returns the
// reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(input) {
  let reversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input.charAt(i);
  }
  return reversed;
}

const inputString = "hello world";
const reversedString = reverseString(inputString);

console.log("Example Output:", reversedString);

