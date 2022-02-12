const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');
const allClear = document.querySelector('[data-all-clear]');
const equals = document.querySelector('[data-equals]');
const deletee = document.querySelector('[data-delete]');
const square = document.querySelector('[data-square]');
const currentOperandTextElement = document.querySelector('[data-current-operand]').innerText;

function getHistory() {
    return document.querySelector('[data-previous-operand]').innerText;
}

function printHistory(num) {
    document.querySelector('[data-previous-operand]').innerText = getFormattedNumber(num);
}

function getOutput() {
    return document.querySelector('[data-current-operand]').innerText;
}

function printOutput(num) {
    if (num == '') {
        document.querySelector('[data-current-operand]').innerText = '';
    } else {
        document.querySelector('[data-current-operand]').innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}


function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}
// alert(reverseNumberForFormat(getOutput()));


for (num of numbers) {
    num.addEventListener('click', function() {
        let output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output = output + this.innerText;
            printOutput(output);
            // console.log(output);
        }
    });
}

// for (op of operations) {
//     op.addEventListener('click', function() {
//         if ()
//     });
// }

allClear.addEventListener('click', function() {
    printHistory('');
    printOutput('');
})
deletee.addEventListener('click', function() {
    var output = reverseNumberFormat(getOutput()).toString();
    if (output) {
        output = output.substring(0, output.length - 1);
        printOutput(output);
    }
})