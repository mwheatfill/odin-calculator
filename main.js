//////////////////
// functions
/////////////////

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

// disables decimal button if it is detected in value
const toggleDecimalButton = function () {
  if (expression.leftValue.includes('.') && expression.operator == '') {
    return true;
  } else if (expression.operator != '' && expression.rightValue.includes('.')) {
    return true;
  } else {
    return false;
  }
};

// updates display when input is detected
const updateDisplay = function (value) {
  const display = document.querySelector('.display');
  const decimalButton = document.querySelector('#decimal');
  decimalButton.disabled = toggleDecimalButton();
  display.textContent = value;
};

// clears the expression object when an evaluation occurs
const clearExpression = function () {
  expression.operator = '';
  expression.leftValue = '';
  expression.rightValue = '';
};

// event listener that updates the expression object values
const updateValue = function (e) {
  if (e.target.textContent == 'C') {
    updateDisplay('');
    clearExpression();
    return;
  }

  if (!expression.operator) {
    expression.leftValue += e.target.textContent;
  }

  if (expression.operator) {
    expression.rightValue += e.target.textContent;
  }
  updateDisplay(
    `${expression.leftValue} ${expression.operator} ${expression.rightValue}`
  );
};

// event listener that updates expression object operator property
const updateOperator = function (e) {
  if (
    !expression.leftValue ||
    (!expression.rightValue && e.target.textContent == '=')
  ) {
    return;
  }
  if (!expression.operator) {
    expression.operator = e.target.textContent;
  }

  if (expression.operator && !expression.rightValue) {
    expression.operator = e.target.textContent;
  }
  updateDisplay(`${expression.leftValue} ${expression.operator}`);

  if (expression.rightValue) {
    result = operate(
      expression.operator,
      Number(expression.leftValue),
      Number(expression.rightValue)
    );
    clearExpression();

    if (result == 'Infinity') {
      updateDisplay('To infinity and beyond! 🚀');
    } else {
      expression.leftValue = String(result).substring(0, 10);

      e.target.textContent != '='
        ? (expression.operator = e.target.textContent)
        : (expression.operator = '');
        updateDisplay(`${expression.leftValue} ${expression.operator}`);
    }
  }
};

//////////////////
// main
/////////////////

// add event listener to all numbers
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', updateValue);
});

// add event listener to all operators
const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => {
  operation.addEventListener('click', updateOperator);
});

// object to hold latest expression for evaluation
const expression = {
  operator: '',
  leftValue: '',
  rightValue: '',
};
