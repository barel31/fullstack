const EASY = 60;
const MEDIUM = 40;
const HARD = 20;

initBoard();

// Print board
function initBoard() {
<<<<<<< HEAD
    // get element of by board id
    let board = document.getElementById('board');
=======
    // Print board
    const board = $('#board');
>>>>>>> jQuery

    // creation of inputs and tagging them by class and id
    let ele,
        groupBackup,
        group = 1;
        // creation loops of 9x9 inputs
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
<<<<<<< HEAD
            ele = document.createElement('input');
            ele.classList.add('input');
            ele.classList.add('group-' + group);
            ele.classList.add('row-' + i);
            ele.classList.add('col-' + j);
            ele.setAttribute('name', 'input_' + i + '_' + j);
            ele.setAttribute('type', 'text');
            ele.setAttribute('maxlength', '1');
            // regex - making a range of numbers only between 1-9
            ele.setAttribute('oninput', "this.value=this.value.replace(/[^1-9]/g,'');");
            board.appendChild(ele);
            // advance group variable every three iterations
=======
            ele = $('<input>')
                .addClass('input group-' + group + ' row-' + i + ' col-' + j)
                .attr('name', 'input_' + i + '_' + j)
                .attr('type', 'text')
                .attr('maxlength', '1');
            board.append(ele);

>>>>>>> jQuery
            if (j % 3 === 0) {
                group++;
            }
            // pass to a new line & reduces group by three
            if (j % 9 === 0) {
<<<<<<< HEAD
                // creating br element to move to a new row
                let br = document.createElement('br');
                board.appendChild(br);
                // backing up groups before reducing
=======
                board.append('<br>');

>>>>>>> jQuery
                groupBackup = group;
                group -= 3;
            }
        }
        // every three columes return group to the backup variable
        if (i % 3 === 0) {
            group = groupBackup;
        }
    }
    // calling the function to generate a playable board
    randomizeInputs();
}
// function to make a playable board
function randomizeInputs() {
    // function to make randon numbers 
    function random(to, plusOne = true) {
        if (plusOne) {
            return Math.floor(Math.random() * to) + 1;
        }
        return Math.floor(Math.random() * to);
    }

<<<<<<< HEAD
    let inputs = document.getElementsByClassName('input');
    inputs.value = '';
    inputs.disabled = false;
    for (i = 0; i <= 80; i++) {
        // get classes of input
        let classList = inputs[i].classList.toString().split(' ');
        // create arrays contain values of col, raw and group
        let groupArr = [],
            rowArr = [],
            colArr = [];
        // group of input
        let group = document.getElementsByClassName(classList[1]);
        for (let i = 0; i < group.length; i++)
            if (group[i].value !== '') {
                groupArr.push(parseInt(group[i].value));
            }
        // row of input
        let row = document.getElementsByClassName(classList[2]);
        for (let i = 0; i < row.length; i++)
            if (row[i].value !== '') {
                rowArr.push(parseInt(row[i].value));
            }
        // col of input
        let col = document.getElementsByClassName(classList[3]);
        for (let i = 0; i < col.length; i++)
            if (col[i].value !== '') {
                colArr.push(parseInt(col[i].value));
            }
        // keep genereting random number until its not on the arrays.
        let rnd = random(9);
        let cnt = 0;
        while (groupArr.includes(rnd) || rowArr.includes(rnd) || colArr.includes(rnd)) {
            rnd = random(9);
            if (cnt === 500) {
                setTimeout(() => {
                    restart();
                }, 0);
                return;
            }
            cnt++;
        }

        // input
        inputs[i].value = rnd;
        inputs[i].disabled = true;
    }
    // Randomize index to hide
    for (i = 0; i < 60; i++) {
        let indexNumbers = [],
            rndIndex = random(80, false);
        while (indexNumbers.includes(rndIndex)) {
            rndIndex = random(80, false);
        }
        indexNumbers.push(rndIndex);
        inputs[rndIndex].value = '';
        inputs[rndIndex].disabled = false;
    }
    // let rndIndex = Math.floor(Math.random() * 80) + 1;
=======
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

    // const inputs = $('.input');
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
>>>>>>> jQuery
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
<<<<<<< HEAD

    let check1 = document.getElementById('check');
    check1.setAttribute('disabled', '');
    check1.disabled = true;
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

function restart() {
    // Initilize restart
    let inputs = document.querySelectorAll('.input');
    for (let i = 0; i < 81; i++) {
        inputs[i].value = '';
        inputs[i].disabled = false;
    }

    randomizeInputs();
}
=======
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
>>>>>>> jQuery
