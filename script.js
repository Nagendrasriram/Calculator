let isGodMode = false;

// Function to append characters to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression with advanced functions
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Invalid Expression';
    }
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to delete the last character
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to toggle dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Function to toggle God Mode
function toggleGodMode() {
    const extraFunctions = document.querySelectorAll('.extra');
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    isGodMode = !isGodMode; // Toggle God Mode
    
    // Show/Hide advanced functions
    extraFunctions.forEach((button) => {
        button.style.display = isGodMode ? 'block' : 'none';
    });

    // Change display message
    display.value = isGodMode ? 'God Mode Activated' : 'God Mode Deactivated';
    setTimeout(() => { display.value = ''; }, 1000);

    // Add animation class for cool effect
    buttons.forEach(button => button.classList.add('active'));
    setTimeout(() => {
        buttons.forEach(button => button.classList.remove('active'));
    }, 500);
}

// Function for keyboard support
document.addEventListener('keydown', function(event) {
    const display = document.getElementById('display');
    const key = event.key;

    if ('0123456789'.includes(key)) {
        display.value += key;
    } else if (key === '+') {
        display.value += '+';
    } else if (key === '-') {
        display.value += '-';
    } else if (key === '*') {
        display.value += '*';
    } else if (key === '/') {
        display.value += '/';
    } else if (key === '.') {
        if (!display.value.includes('.')) {
            display.value += '.';
        }
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Enter') {
        calculateResult();
    }
});
