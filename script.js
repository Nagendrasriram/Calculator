// Function to append numbers or operators to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use the eval function to evaluate the expression
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
