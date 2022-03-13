// add function
const add = (a, b) => {
  return a + b;
};

// subtract function
const subtract = (a, b) => {
  return a - b;
};

// multiply function
const multiply = (a, b) => {
  return a * b;
};

// divide function
const divide = (a, b) => {
  return a / b;
};

// operate function takes an operator and 2 values
const operate = (operator, firstValue, secondValue) => {
  if (operator == '+') {
    return add(firstValue, secondValue);
  }

  if (operator == '-') {
    return subtract(firstValue, secondValue);
  }

  if (operator == '*') {
    return multiply(firstValue, secondValue);
  }

  if (operator == '/') {
    return divide(firstValue, secondValue);
  }
};
