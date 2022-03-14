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

  if (operator == 'x') {
    return multiply(firstValue, secondValue);
  }

  if (operator == '/') {
    return divide(firstValue, secondValue);
  }
};

const updateDisplay = function (value) {
  const display = document.querySelector('.display');
  !value ? (display.textContent = value) : (display.textContent += value);
};

const clearExpression = function () {
  expression.operator = '';
  expression.leftValue = '';
  expression.rightValue = '';
};

const updateValue = function (e) {
  if (e.target.textContent == 'C') {
    updateDisplay('');
    clearExpression();
    return;
  }

  if (!expression.operator) {
    expression.leftValue += e.target.textContent;
    updateDisplay(e.target.textContent);
  }

  if (expression.operator) {
    expression.rightValue += e.target.textContent;
    updateDisplay(e.target.textContent);
  }
  console.log(expression);
};

const updateOperator = function (e) {
  if (!expression.leftValue) {
    return;
  }
  if (!expression.operator || !expression.rightValue) {
    expression.operator = e.target.textContent;
    updateDisplay(expression.operator);
  }

  if (expression.rightValue) {
    result = (operate(expression.operator, Number(expression.leftValue), Number(expression.rightValue)));
    clearExpression();
    expression.leftValue = result;
    updateDisplay('');
    updateDisplay(result);
  }
};

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', updateValue);
});

const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => {
  operation.addEventListener('click', updateOperator);
});

const expression = {
  operator: '',
  leftValue: '',
  rightValue: '',
};
