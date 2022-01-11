const ARRAY_1_9 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

initBoard();

function initBoard() {
    // Print board
    // debugger
    let board = document.getElementById('board');

    let ele;
    let group = 1;
    let groupBackup;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            ele = document.createElement('input');
            ele.classList.add('input');
            ele.classList.add('group-' + group);
            ele.classList.add('row-'+i);
            ele.classList.add('col-'+j);
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
}

function finish() {
    // Check if board has completed

    // Checks groups
    let successGrpCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = document.getElementsByClassName('group-' + j);
        let inputsValues = [];
        for (let i = 0; i < 9; i++) {
            inputsValues.push(inputs[i].value);
        }
        if (checkInputs(inputs) === 0) {
            console.log('group' + j + ' good');
            successGrpCount++;
        } else {
            console.log('group' + j + ' wrong');
        }

    }
    // if(successGrpCount === 9) {}

    // Check columns
    let successColCount = 0;
    for (let i = 1; i <= 9; i++) {
        let inputs = document.getElementsByClassName('col-'+i);
        if (checkInputs(inputs) === 0) {
            console.log('col' + j + ' good');
            successColCount++;
        } else {
            console.log('col' + j + ' wrong');
        }
    }

    // Check Rows
    let successRowCount = 0;
    for (let i = 1; i <= 9; i++) {
        let inputs = document.getElementsByClassName('row-'+i);
        if (checkInputs(inputs) === 0) {
            console.log('row' + j + ' good');
            successRowCount++;
        } else {
            console.log('row' + j + ' wrong');
        }
    }
}

function checkInputs(inputs) {
    // Check inputs (array)
    // Return number of how much validations have been failed.

    let failCount = 0;

    let inputsValues = [];
    for (let i = 0; i < 9; i++) {
        inputsValues.push(inputs[i].value);
    }
    // Sort the array before check
    inputsValues.sort();
    // Check if sorted array equal to array 1-9
    if (isArraysEqual(inputsValues, ARRAY_1_9)) {
        failCount++;
    } else {
    }
    return failCount;
}
function isArraysEqual(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] != arr2[i]) {
                return false;
            }
        }
    }
    return true;
}

function restart() {
    // Initilize restart

    let inputs = document.querySelectorAll('.input');
    for (let i = 0; i < 81; i++) {
        inputs[i].value = '';
    }
}
