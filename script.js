let isDarkMode = false;
let history = [];

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        let result = eval(display.value);
        if (result === Infinity || result === -Infinity) {
            display.value = "Error: Div by 0";
        } else {
            display.value = result;
            addHistory(display.value);
        }
    } catch (e) {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function addHistory(result) {
    history.push(result);
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.textContent = result;
    historyList.appendChild(historyItem);
    document.getElementById('history').style.display = 'block';
}

function toggleHistory() {
    const historyPanel = document.getElementById('history');
    if (historyPanel.style.display === 'block') {
        historyPanel.style.display = 'none';
    } else {
        historyPanel.style.display = 'block';
    }
}

function clearHistory() {
    history = [];
    document.getElementById('history-list').innerHTML = '';
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function handleFactorial() {
    const display = document.getElementById('display');
    const value = parseInt(display.value);
    if (value < 0) {
        display.value = "Error";
    } else {
        display.value = factorial(value);
    }
}
