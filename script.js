function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '.' && display.value.includes('.')) return;
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Invalid Expression';
    }
}

function clearAll() {
    const display = document.getElementById('display');
    display.value = '';
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
