// Get references to input fields and result display
const num1Input = document.getElementById('number1');
const num2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('result');

// Function to get the numbers and validate
function getNumbers() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Please enter valid numbers!";
        return null;
    }
    return { num1, num2 };
}

// Arithmetic functions
function add() {
    const numbers = getNumbers();
    if (numbers) {
        const result = numbers.num1 + numbers.num2;
        resultDisplay.textContent = `Result: ${result}`;
    }
}

function subtract() {
    const numbers = getNumbers();
    if (numbers) {
        const result = numbers.num1 - numbers.num2;
        resultDisplay.textContent = `Result: ${result}`;
    }
}

function multiply() {
    const numbers = getNumbers();
    if (numbers) {
        const result = numbers.num1 * numbers.num2;
        resultDisplay.textContent = `Result: ${result}`;
    }
}

function divide() {
    const numbers = getNumbers();
    if (numbers) {
        if (numbers.num2 === 0) {
            resultDisplay.textContent = "Cannot divide by zero!";
        } else {
            const result = numbers.num1 / numbers.num2;
            resultDisplay.textContent = `Result: ${result}`;
        }
    }
}
