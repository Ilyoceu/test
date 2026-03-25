let answer = "";
let x = 0;
let operator = "";
let equation = "";

function updateDisplay(value) {
  document.getElementById("text").textContent = value || "0";
}

function handleNumber(i) {
  answer += i.toString();
  updateDisplay(equation + answer);
}

function handleOperator(op) {
  x = parseFloat(answer);
  operator = op;
  equation = x + " " + op + " ";
  answer = "";
  updateDisplay(equation);
}

function handleEquals() {
  const y = parseFloat(answer);
  let result;
  if (operator === "+") result = x + y;
  else if (operator === "-") result = x - y;
  else if (operator === "*") result = x * y;
  else if (operator === "/") result = x / y;
  updateDisplay(result.toString()); // only shows the result
  answer = result.toString();
  equation = "";
  operator = "";
}

for (let i = 1; i < 10; i++) {
  document.getElementById(i.toString()).addEventListener("click", () => handleNumber(i));
}

["+", "-", "*", "/"].forEach(op => {
  document.getElementById(op).addEventListener("click", () => handleOperator(op));
});

document.getElementById("equal").addEventListener("click", handleEquals);
document.getElementById("reset").addEventListener("click", () => {
  answer = "";
  x = 0; 
  operator = "";
  equation = "";
  updateDisplay("0");
});

document.getElementById("del").addEventListener("click", () => {
  answer = answer.slice(0, -1);
  updateDisplay(equation + answer);
});