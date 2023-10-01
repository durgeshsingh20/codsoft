document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('result');
    let currentValue = '0';
    let operator = '';
    let prevValue = '';

    function updateDisplay() {
        display.value = currentValue;
    }

    function clearDisplay() {
        currentValue = '0';
        prevValue = '';
        operator = '';
        updateDisplay();
    }

    function calculate() {
        switch (operator) {
            case '+':
                currentValue = (parseFloat(prevValue) + parseFloat(currentValue)).toString();
                break;
            case '-':
                currentValue = (parseFloat(prevValue) - parseFloat(currentValue)).toString();
                break;
            case '*':
                currentValue = (parseFloat(prevValue) * parseFloat(currentValue)).toString();
                break;
            case '/':
                currentValue = (parseFloat(prevValue) / parseFloat(currentValue)).toString();
                break;
        }
    }

    document.querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function () {
            const value = button.textContent;

            if (value >= '0' && value <= '9') {
                if (currentValue === '0') {
                    currentValue = value;
                } else {
                    currentValue += value;
                }
            } else if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                if (operator && prevValue) {
                    calculate();
                    prevValue = '';
                    operator = '';
                }
            } else {
                if (prevValue && operator) {
                    calculate();
                    prevValue = currentValue;
                    operator = value;
                    currentValue = '0';
                } else {
                    prevValue = currentValue;
                    operator = value;
                    currentValue = '0';
                }
            }

            updateDisplay();
        });
    });
});
