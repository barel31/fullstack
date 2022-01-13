const EASY = 60;
const MEDIUM = 40;
const HARD = 20;

initBoard();

function initBoard() {
    // Print board
    // debugger
    const board = $('#board');

    let ele, groupBackup;
    let group = 1;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            ele = $('<input>').
            addClass('input group-' + group + ' row-' + i + ' col-' + j).
            attr('name', 'input_' + i + '_' + j).
            attr('type', 'text').
            attr('maxlength', '1');
            board.append(ele);

            if (j % 3 === 0) {
                group++;
            }
            if (j % 9 === 0) {
                board.append('<br>');

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

    function randomNumber(to) {
        return Math.floor(Math.random() * to);
    }

    const inputs = $('.input');
    let indexRandomNumbers = [];
    for (i = 0; i < number; i++) {
        // Randomize index of input no repeat.
        let rndIndex = randomNumber(81);
        while (indexRandomNumbers.includes(rndIndex)) {
            rndIndex = randomNumber(81);
        }
        // console.log(rndIndex);
        indexRandomNumbers.push(rndIndex);

        // let classList = inputs[rndIndex].attr('class').split(' '); // NOT WORKING (err: attr is not a function)
        const classList = inputs[rndIndex].classList.toString().split(/\s+/);
        // console.log(classList[1]);

        inputs[rndIndex].value = randomNumber(9);
        inputs[rndIndex].disabled = true;
    }
}

$('#finish').on('click', function() {
    // Button finish pressed  - Check if board has completed

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
        if (isArrayValid(inputsValues)) {
            success = true;
        }
    
        return success;
    }

    function isArrayValid(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != i + 1) {
                return false;
            }
        }
        return true;
    }

    // Checks groups
    let successGrpCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = $('.group-' + j);
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
        let inputs = $('.col-' + j);
        if (checkInputs(inputs)) {
            console.log('col-' + j + ' good');
            successColCount++;
        } else {
            console.log('col-' + j + ' wrong');
        }
    }

    // Check Rows
    let successRowCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = $('.row-' + j);
        if (checkInputs(inputs)) {
            console.log('row-' + j + ' good');
            successRowCount++;
        } else {
            console.log('row-' + j + ' wrong');
        }
    }
});

$('#again').on('click', function() {
    // Button again pressed - Initilize restart
    const inputs = $('.input');
    inputs.prop("disabled", false);
    inputs.val('');
    randomizeInputs(HARD);
});


// On inputs change regex it to 1 digit of 1-9 valid numbers
$('.input').on('input', function() {
    return this.value=this.value.replace(/[^1-9]/g,'');
});