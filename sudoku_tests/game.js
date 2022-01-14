const EASY = 60;
const MEDIUM = 40;
const HARD = 20;

initBoard();

function initBoard() {
    // Print board
    const board = $('#board');

    let ele, groupBackup;
    let group = 1;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            ele = $('<input>')
                .addClass('input group-' + group + ' row-' + i + ' col-' + j)
                .attr('name', 'input_' + i + '_' + j)
                .attr('type', 'text')
                .attr('maxlength', '1');
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
    function randomNumber(to, plusOne=false) {
        if (plusOne) {
            return Math.floor(Math.random() * to) + 1;
        }
        return Math.floor(Math.random() * to);
    }

    // Loader animation
    $('#loader').html('');


    // Reset inputs
    const inputs = $('.input');
    inputs.prop('disabled', false);
    inputs.val('');

    let indexRandomNumbers = [];
    for (i = 0; i < number; i++) {
        // Randomize index of input no repeat.
        let rndIndex = randomNumber(81);
        while (indexRandomNumbers.includes(rndIndex)) {
            rndIndex = randomNumber(81);
        }
        indexRandomNumbers.push(rndIndex);

        const classList = inputs[rndIndex].classList.toString().split(/\s+/);


        // Get group of input
        const group = $('.' + classList[1]);
        let groupVals = [];
        for (let i = 0; i < group.length; i++) {
            if(group[i].value !== '') {
                groupVals.push(parseInt(group[i].value));
            }
        }
        // Get row of input
        const row = $('.' + classList[2]);
        let rowVals = [];
        for (let i = 0; i < row.length; i++) {
            if(row[i].value !== '') {
                rowVals.push(parseInt(row[i].value));
            }
        }
        // Get col of input
        const col = $('.' + classList[3]);
        let colVals = [];
        for (let i = 0; i < col.length; i++) {
            if(col[i].value !== '') {
                colVals.push(parseInt(col[i].value));
            }
        }

        let rndNumber = randomNumber(9, true);
        let cnt = 0;
        while (groupVals.includes(rndNumber) || rowVals.includes(rndNumber) || colVals.includes(rndNumber)) {
            rndNumber = randomNumber(9, true);
            if (cnt > 500) {
                randomizeInputs(EASY);
                return;
            }
            cnt++;
        }
        inputs[rndIndex].value = rndNumber;
        inputs[rndIndex].disabled = true;
    }
}

// Button finish pressed  - Check if board has completed
$('#finish').on('click', function () {

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
            successGrpCount++;
        }
    }
    // if(successGrpCount === 9) {}

    // Check columns
    let successColCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = $('.col-' + j);
        if (checkInputs(inputs)) {
            successColCount++;
        }
    }

    // Check Rows
    let successRowCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = $('.row-' + j);
        if (checkInputs(inputs)) {
            successRowCount++;
        }
    }

    // Validation
    const cnt = successGrpCount + successColCount + successRowCount;
    console.log(cnt);
    $('#pMessage').html(successGrpCount + '/9 Groups are good\n' + successRowCount + '/9 Rows are good\n' + successColCount + '/9 Columns are good')
    if(cnt === 27) {
        $(body).html('You have been complete.')
    }
});

// Button again pressed - Initilize restart
$('#again').on('click', function () {
    $('#loader').html('<div class="loadingio-spinner-cube-2zx4f3ctido"><div class="ldio-1pkt0oqav2x"><div></div><div></div><div></div><div></div></div></div>');
    setTimeout(function() {
        randomizeInputs(EASY);
    }, 1);
});

// On inputs change regex it to 1 digit of 1-9 valid numbers
$('.input').on('input', function () {
    return (this.value = this.value.replace(/[^1-9]/g, ''));
});
