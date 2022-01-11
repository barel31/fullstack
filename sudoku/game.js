const EASY = 60;
const MEDIUM = 40;
const HARD = 20;

initBoard();

function initBoard() {
    // Print board
    // debugger
    let board = document.getElementById('board');

    let ele, groupBackup;
    let group = 1;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            ele = document.createElement('input');
            ele.classList.add('input');
            ele.classList.add('group-' + group);
            ele.classList.add('row-' + i);
            ele.classList.add('col-' + j);
            ele.setAttribute('name', 'input_' + i + '_' + j);
            ele.setAttribute('type', 'text');
            ele.setAttribute('maxlength', '1');
            ele.setAttribute('oninput', "this.value=this.value.replace(/[^1-9]/g,'');"); // 1-9 only
            board.appendChild(ele);

            if (j % 3 === 0) {
                group++;
            }
            if (j % 9 === 0) {
                let br = document.createElement('br');
                board.appendChild(br);

                groupBackup = group;
                group -= 3;
            }
        }
        if (i % 3 === 0) {
            group = groupBackup;
        }
    }

    randomizeInputs(EASY);
}

function randomizeInputs(number) {
    let inputs = document.getElementsByClassName('input');
    let indexRandomNumbers = [];
    for (i = 0; i < number; i++) {
        
        // Randomize index of input no repeat.
        let rndIndex = Math.floor(Math.random() * 80) + 1;
        while(indexRandomNumbers.includes(rndIndex)) {
            rndIndex = Math.floor(Math.random() * 80) + 1;
            
        }
        console.log(rndIndex);
        indexRandomNumbers.push(rndIndex);
        
        let classList = inputs[rndIndex].classList.toString().split(' ');
        console.log(classList[1]);

        inputs[rndIndex].value = Math.floor(Math.random() * 9) + 1;
        inputs[rndIndex].setAttribute('disabled' , "")
    }

}

function finish() {
    // Check if board has completed

    // Checks groups
    let successGrpCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = document.getElementsByClassName('group-' + j);
        if (checkInputs(inputs)) {
            console.log('group-' + j + ' good');
            successGrpCount++;
        } else {
            console.log('group-' + j + ' wrong');
        }
    }
    // if(successGrpCount === 9) {}

    // Check columns
    let successColCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = document.getElementsByClassName('col-' + j);
        if (checkInputs(inputs)) {
            // console.log('col-' + j + ' good');
            successColCount++;
        } else {
            // console.log('col-' + j + ' wrong');
        }
    }

    // Check Rows
    let successRowCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = document.getElementsByClassName('row-' + j);
        if (checkInputs(inputs)) {
            console.log('row-' + j + ' good');
            successRowCount++;
        } else {
            console.log('row-' + j + ' wrong');
        }
    }
}

function checkInputs(inputs) {
    // Check inputs (array)
    // Return number of how much validations have been failed.

    let success = false;

    // Get values of all inputs
    let inputsValues = [];
    for (let i = 0; i < 9; i++) {
        inputsValues.push(inputs[i].value);
    }
    // Sort the array before check
    inputsValues.sort();
    // Check if sorted array equal to array 1-9
    if (isArraysEqual(inputsValues)) {
        success = true;
    }

    return success;
}
function isArraysEqual(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != i + 1) {
            return false;
        }
    }
    return true;
}

function restart() {
    // Initilize restart

    let inputs = document.querySelectorAll('.input');
    for (let i = 0; i < 81; i++) {
        inputs[i].value = '';
        inputs[i].removeAttribute('disabled');
    }

    randomizeInputs(HARD);
}
