// Task 5: Implement a simple JavaScript calculator.
// The calculator should take two numbers and an
// operator (+, -, *, /) as input and return the result of the operation

function calculator(number1, number2, operator) {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
        if(number1>number2){
            return number1 - number2;
        }else{
            return number2 - number1;
        }
    case "*":
      return number1 * number2;
    case "/":
      return (number1 / number2).toFixed(2);
    default:
      return "Operator is not correct!!!";
  }
}


console.log(calculator(5, 3, "+"));
console.log(calculator(15, 8, "-"));
console.log(calculator(7, 2, "*")); 
console.log(calculator(10, 2, "/"));