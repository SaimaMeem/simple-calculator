const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');
const allClear = document.querySelector('[data-all-clear]');
const equals = document.querySelector('[data-equals]');
const deletee = document.querySelector('[data-delete]');
const squareRoot = document.querySelector('[data-square-root]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

let firstNum = ''; //current
let secondNum = ''; // previous
let result = null;
let lastOperation = '';
let haveDecimalPoint = false;


for (let num of numbers) {
    num.addEventListener('click', function(e) {
        if (e.target.innerText === '.' && !haveDecimalPoint) {
            haveDecimalPoint = true;
        } else if (e.target.innerText === '.' && haveDecimalPoint) {
            return;
        }
        firstNum += e.target.innerText;
        currentOperand.innerText = firstNum;
    })
}
for (let op of operations) {
    op.addEventListener('click', function(e) {
        if (!firstNum) {
            return;
        }
        haveDecimalPoint = false;
        const operation = e.target.innerText;

        if (firstNum && secondNum) {
            mathOperation();
        } else {
            result = parseFloat(firstNum);
        }
        clear(operation);
        lastOperation = operation;


    })
}

function clear(name = '') {
    secondNum = result + ' ' + name + ' ';
    previousOperand.innerText = secondNum;
    firstNum = '';
    currentOperand.innerText = firstNum;
}

function mathOperation() {
    switch (lastOperation) {
        case '+':
            result = parseFloat(result) + parseFloat(firstNum);

            break;
        case '-':
            result = parseFloat(result) - parseFloat(firstNum);

            break;
        case '*':
            result = parseFloat(result) * parseFloat(firstNum);

            break;
        case '/':
            result = parseFloat(result) / parseFloat(firstNum);

            break;

    }
}

equals.addEventListener('click', function(e) {
    if (!firstNum || !secondNum) {
        return;
    }
    haveDecimalPoint = false;
    mathOperation();
    clear();
    currentOperand.innerText = result;
    previousOperand.innerText = '';
    firstNum = result;
    secondNum = '';

})


allClear.addEventListener('click', function(e) {
    previousOperand.innerText = '';
    currentOperand.innerText = '';
    firstNum = '';
    secondNum = '';
    result = '';
});

deletee.addEventListener('click', function(e) {
    firstNum = firstNum.toString();
    firstNum = firstNum.substring(0, firstNum.length - 1);
    currentOperand.innerText = firstNum;
});

squareRoot.addEventListener('click', function(e) {
    if (!secondNum && firstNum) {
        result = Math.sqrt(firstNum);
        currentOperand.innerText = result;
    }
})