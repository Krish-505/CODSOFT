document.addEventListener('DOMContentLoaded', () => {

    // Get references to the display and all buttons
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    // Calculator state variables
    let currentOperand = '0';
    let previousOperand = null;
    let operation = null;
    // Flag to check if the screen should be cleared before typing a new number
    let shouldResetScreen = false;

    // Function to update the display with the current operand
    const updateDisplay = () => {
        display.value = currentOperand;
    };

    // Resets the calculator to its initial state
    const resetCalculator = () => {
        currentOperand = '0';
        previousOperand = null;
        operation = null;
        shouldResetScreen = false;
        updateDisplay();
    };

    // Handles number and decimal point inputs
    const inputNumber = (number) => {
        // If the screen needs to be reset, start with the new number
        if (shouldResetScreen) {
            currentOperand = number;
            shouldResetScreen = false;
        } else {
            // Otherwise, append the number
            currentOperand = currentOperand === '0' ? number : currentOperand + number;
        }
        // Prevent multiple decimal points
        if (number === '.' && currentOperand.split('.').length > 2) {
            currentOperand = currentOperand.slice(0, -1);
        }
        updateDisplay();
    };

    // Handles operator inputs (+, -, *, /)
    const chooseOperation = (op) => {
        // If no number is entered yet, do nothing
        if (currentOperand === '') return;

        // If there's already a pending operation, calculate it first
        if (previousOperand !== null) {
            calculate();
        }

        operation = op;
        previousOperand = currentOperand;
        shouldResetScreen = true; // Ready for the next number
    };

    // Performs the calculation
    const calculate = () => {
        let result = 0;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);

        // Don't calculate if numbers aren't valid
        if (isNaN(prev) || isNaN(current) || operation === null) return;

        switch (operation) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '*': result = prev * current; break;
            case '/':
                if (current === 0) {
                    alert("Error: Cannot divide by zero.");
                    resetCalculator();
                    return;
                }
                result = prev / current;
                break;
            default: return;
        }

        // Round to a few decimal places to avoid floating point issues
        currentOperand = String(Math.round(result * 100000) / 100000);
        operation = null;
        previousOperand = null;
        updateDisplay();
    };

    // Add a single event listener for all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number')) {
                inputNumber(button.innerText);
            } else if (button.classList.contains('operator')) {
                chooseOperation(button.innerText);
            } else if (button.id === 'equals') {
                calculate();
                shouldResetScreen = true; // After equals, a new number should start a new calculation
            } else if (button.id === 'clear') {
                resetCalculator();
            }
        });
    });

    // Initialize the display
    updateDisplay();
});