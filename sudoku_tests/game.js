// const EASY = 60;
const MEDIUM = 40;
const HARD = 20;
let howMuch = 60;

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

    randomizeInputs(howMuch);
}

function randomizeInputs(number) {
    function randomNumber(to, plusOne = false) {
        if (plusOne) {
            return Math.floor(Math.random() * to) + 1;
        }
        return Math.floor(Math.random() * to);
    }

    $('h1').html('Good Luck!');

    // Loader animation
    $('#loader').html('');

    // Reset inputs
    const inputs = $('.input');
    inputs.prop('disabled', false);
    inputs.val('');

    // Build a complete board.
    for (i = 0; i < 81; i++) {
        // Get classes of input
        const classList = inputs[i].classList.toString().split(/\s+/);
        let groupVals = [],
            rowVals = [],
            colVals = [];

        // Get group of input
        const group = $('.' + classList[1]);
        for (let i = 0; i < group.length; i++) {
            if (group[i].value !== '') {
                groupVals.push(parseInt(group[i].value));
            }
        }
        // Get row of input
        const row = $('.' + classList[2]);
        for (let i = 0; i < row.length; i++) {
            if (row[i].value !== '') {
                rowVals.push(parseInt(row[i].value));
            }
        }
        // Get col of input
        const col = $('.' + classList[3]);
        for (let i = 0; i < col.length; i++) {
            if (col[i].value !== '') {
                colVals.push(parseInt(col[i].value));
            }
        }

        let rndNumber = randomNumber(9, true);
        let cnt = 0;
        while (groupVals.includes(rndNumber) || rowVals.includes(rndNumber) || colVals.includes(rndNumber)) {
            rndNumber = randomNumber(9, true);
            if (cnt > 500) {
                randomizeInputs(howMuch);
                return;
            }
            cnt++;
        }
        inputs[i].value = rndNumber;
        inputs[i].disabled = true;
    }
    inputs.css('color', '#000000a6');

    // Randomize index of input w/ repeation to hide.
    let rndIndex = [];
    for (let i = 0; i < 81 - number; i++) {
        let rnd = randomNumber(81);
        while (rndIndex.includes(rnd)) {
            rnd = randomNumber(81);
        }
        rndIndex.push(rnd);
    }

    // Hide selected inputs.
    for (let i = 0; i < rndIndex.length; i++) {
        inputs[rndIndex[i]].value = '';
        inputs[rndIndex[i]].disabled = false;
        inputs[rndIndex[i]].style.opacity = '1.0';
        inputs[rndIndex[i]].style.color = 'black';
    }

    // Trigger finish btn to execute validation
    $('#finish').click();
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

    $('.input:not([disabled])').css({'color': 'black', 'opacity': '1.0'});
    $('.input:disabled').css('color', '#000000a6');

    // Checks groups
    let successGrpCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = $('.group-' + j);
        if (checkInputs(inputs)) {
            successGrpCount++;
            inputs.css('opacity', '0.8');
            inputs.css('color', 'red');
        }
    }

    // Check columns
    let successColCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = $('.col-' + j);
        if (checkInputs(inputs)) {
            successColCount++;
            inputs.css('opacity', '0.8');
            inputs.css('color', 'red');
        }
    }

    // Check Rows
    let successRowCount = 0;
    for (let j = 1; j <= 9; j++) {
        let inputs = $('.row-' + j);
        if (checkInputs(inputs)) {
            successRowCount++;
            inputs.css('opacity', '0.8');
            inputs.css('color', 'red');
        }
    }

    // Validation
    const cnt = successGrpCount + successColCount + successRowCount;
    $('#pMessage').html(
        successGrpCount + '/9 Groups ' + successRowCount + '/9 Rows ' + successColCount + '/9 Columns<br>' + cnt + '/27 Total'
    );
    if (cnt === 27) {
        $('h1').html('You have been completed the puzzle!');
    }
});

// Button again pressed - Initilize restart
$('#again').on('click', function () {
    $('#loader').html(
        '<div class="loadingio-spinner-cube-2zx4f3ctido"><div class="ldio-1pkt0oqav2x"><div></div><div></div><div></div><div></div></div></div>'
    );

    // Reset html text
    $('h1').html('Generating...');

    setTimeout(function () {
        randomizeInputs(howMuch);
    }, 1);
});

// On inputs change
$('.input').on('input', function () {
    // Trigger finish btn
    $('#finish').click();

    // Regex it to 1 digit of 1-9 valid numbers
    return (this.value = this.value.replace(/[^1-9]/g, ''));
});

// HowMuch
$('#howMuch').on('input', function () {
    howMuch = parseInt(this.value);
    console.log(howMuch);
});
