var howMuch = 60; // custom input value
var autoCheck = true; // Auto-Check slider
var cntGlobal = 0; // success counter
var timer = 0; // timer variable
var timerElement = $('#timer'); // timer DOM element
let interval; // variable to hold the timer interval repeater
let hidenInputs = {}; // dict of hidden inputs to show hints
let lastFocusedInput; // DOM contain last focused input (use for hint)

// Print board
initBoard(); // Print the board on page load
function initBoard() {
    // get the div element of the board
    const board = $('#board');

    // creating inputs and tagging them by classes
    let element, groupBackup;
    let group = 1;
    let counter = 0;
    // creating loops of 9x9 inputs
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            element = $('<input>')
                .addClass('input group-' + group + ' row-' + i + ' col-' + j + ' n' + counter)
                .attr({ name: 'input_' + i + '_' + j, type: 'text', maxlength: '1' });
            board.append(element);

            // advance group variable every three iterations
            if (j % 3 === 0) {
                group++;
            }
            // pass to a new line & reduces group by three
            if (j % 9 === 0) {
                // creating br element to move to a new row
                board.append('<br>');
                // backing up groups before reducing
                groupBackup = group;
                group -= 3;
            }
            counter++;
        }
        // every three columns return group to the backup variable
        if (i % 3 === 0) {
            group = groupBackup;
        }
    }
}

// Try to generate a playable board
function randomizeInputs(number) {
    // Function to return a random number
    const randomNumber = (to, plusOne = false) => {
        return Math.floor(Math.random() * to) + (plusOne ? 1 : 0);
    };
    // Function to return a random color
    const randomColor = () => {
        return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substring(1, 7);
    };

    // Make a random color for each group
    for (let i = 1; i <= 9; i++) {
        const color = randomColor();
        $('.group-' + i).css('backgroundColor', color);
    }

    // Reset inputs
    const inputs = $('#board .input')
        // .css('color', randomColor); //! Make load time 2x slower
        .prop('disabled', false)
        .val('')
        .attr('placeholder', '');

    // Try to build a complete board
    //? Using Vanilla JS inside the loop to reduce load time
    // loop to go throw all inputs
    for (i = 0; i < 81; i++) {
        // Get classes of input
        const classList = inputs[i].classList.toString().split(/\s+/);
        // create a nested array to contain values of column, row and group
        let classVals = [[], [], []];

        // Loop throw the classList [group-X, row-X, col-X]
        for (let i = 1; i < classList.length; i++) {
            // get all inputs with the same class name
            const className = document.getElementsByClassName(classList[i]);
            // loop throw inputs matched class name
            for (let j = 0; j < className.length; j++) {
                if (className[j].value !== '') {
                    // push the value to the nested array
                    classVals[i - 1].push(className[j].value | 0);
                }
            }
        }

        // Generating random number
        let rndNumber = randomNumber(9, true);
        let cnt = 250; // number of times to retrying before calling the function again
        // keep generating a random number until number not in the nested array.
        while (classVals[0].includes(rndNumber) || classVals[1].includes(rndNumber) || classVals[2].includes(rndNumber)) {
            rndNumber = randomNumber(9, true);
            if (!cnt) {
                // ! timeout make a Matrix effect but takes more load time
                setTimeout(() => {
                    // can't make a playable board, try again
                    randomizeInputs(howMuch);
                }, 0);
                return;
            }
            cnt--;
        }
        // Assign the random number to the input and disable it
        inputs[i].value = rndNumber;
        inputs[i].disabled = true;
    }

    // Hiding inputs
    // Randomize index of input w/ repeation
    let rndIndex = [];
    for (let i = 0; i < 81 - number; i++) {
        let rnd = randomNumber(81);
        while (rndIndex.includes(rnd)) {
            rnd = randomNumber(81);
        }
        rndIndex.push(rnd);
    }
    // Hide values of selected inputs
    hidenInputs = {}; // clear dict from old data
    rndIndex.forEach((val) => {
        // add input index and value to hiddenInputs dict
        hidenInputs[val] = inputs[val].value;

        inputs[val].value = '';
        inputs[val].disabled = false;
        inputs[val].style.opacity = '1.0';
        inputs[val].style.color = 'black';
    });
    // Stop animation
    loaderAnimation();
    // Trigger finish button to execute validation
    $('#finish').click();
}

// Button hint pressed
$('#hint').on('click', function () {
    const index = lastFocusedInput.classList.toString().split(' ')[4].substring(1);
    lastFocusedInput.value = hidenInputs[index];
    lastFocusedInput.placeholder = hidenInputs[index];
    // disable button untill next input focused
    this.disabled = true;
    // trigger finish button to execute validation
    $('#finish').click();
});

// Get focued input for hint
$('input.input').on('focusin', function () {
    if (interval && this.classList.contains('input') && this.disabled === false) {
        // reset opacity of the last focused input
        if (lastFocusedInput) lastFocusedInput.style.opacity = '1';
        // save focused input
        lastFocusedInput = this;
        // change opacity of the focused input
        lastFocusedInput.style.opacity = '0.8';
        // enable hint button
        $('#hint').prop('disabled', false);
    }
});

// Button finish pressed  - Check if board has completed
$('#finish').on('click', () => {
    // Check inputs (array)
    const checkInputs = (inputs) => {
        let success = false;

        // get values of all inputs
        let inputsValues = [];
        for (let i = 0; i < 9; i++) {
            inputsValues.push(inputs[i].value);
        }

        // sort the array before check
        inputsValues.sort();

        // check if sorted array equal to array 1-9
        if (isArrayValid(inputsValues)) {
            success = true;
        }

        // return true if inputs having 9 input of value 1-9 else otherwise
        return success;
    };
    // Check if array is having all numbers from 1 to 9
    const isArrayValid = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != i + 1) {
                return false;
            }
        }
        return true;
    };
    // Reset style of the inputs
    $('#board .input:not([disabled])').css({ color: '#002b59', opacity: '1.0' });
    $('#board .input:disabled').css({ color: 'black', opacity: '1.0' });

    // Create arr of classes names that need to check together
    let classesNames = ['group', 'row', 'col'];
    // Create arr to count succesnes
    let classesCount = [0, 0, 0];

    // First loop goes throw group, row and col classes
    for (let i = 0; i < 3; i++) {
        // Second loop goes throw 1-9 on the same class
        for (let j = 1; j <= 9; j++) {
            // get all input within the class
            let inputs = $('.' + classesNames[i] + '-' + j);

            // check for validation (if arr is 1-9)
            if (checkInputs(inputs)) {
                // Count success
                classesCount[i]++;
                if (autoCheck) {
                    // restyle valid class
                    inputs.css({ opacity: '0.8', color: 'red' });
                }
            }
        }
    }

    // determine if there's a new result
    const cnt = classesCount[0] + classesCount[1] + classesCount[2];
    if (cnt !== cntGlobal) {
        // update global result counter
        cntGlobal = cnt;

        // update message
        const message = $('#pMessage');
        message.html(classesCount[0] + '/9 Groups ' + classesCount[1] + '/9 Rows ' + classesCount[2] + '/9 Columns<br>' + cnt + '/27 Total');
        // message effect
        message.addClass('fadeEffect');
        setTimeout(() => {
            message.removeClass('fadeEffect');
        }, 500);
    }
    // check if board have been completed
    if (cnt === 27) {
        // make announcement in the header
        const h1 = $('h1');
        h1.html('✨You have been completed the puzzle! (within ' + formatTime() + ' seconds!) ✨')
            .css('color', '#91C483')
            .addClass('fadeEffect'); // header fade effect
        setTimeout(() => {
            h1.removeClass('fadeEffect');
        }, 500);

        // stop timer interval
        window.clearInterval(interval);
        // disable hint button
        $('#hint').prop('disabled', true);
    }
});

// Button again pressed - Initilize restart
$('#again').on('click', () => {
    loaderAnimation(true);
    setTimeout(() => {
        randomizeInputs(howMuch);
    }, 0);
});

// On inputs change
$('#board .input').on('input', function () {
    // trigger finish button
    if (autoCheck) {
        $('#finish').click();
    }
    // replace input by regex of number 1-9
    return (this.value = this.value.replace(/[^1-9]/g, ''));
});

// On key press in custom input
$('#howMuch').on('keyup', (e) => {
    if (e.keyCode === 13) {
        // enter key pressed in the custom input

        // click the custom button to update changes
        $('button[name="custom"]').click();
    }
});

// One of four difficulty buttons pressed
$('.difficulty').on('click', function () {
    if (this.name !== 'custom') {
        howMuch = this.name | 0;
    } else {
        // custom pressed - show input element
        const custom = $('.howMuch');
        if (custom.css('display') === 'none') {
            custom.css('display', 'inline');
            this.innerHTML = 'Submit'; // Change button custom text to Submit
            return;
        }
        // get value of custom input and assign it to variable
        const value = $('#howMuch').val() | 0;
        if (value >= 1 && value <= 80) {
            howMuch = value;
        } else {
            howMuch = 60;
        }
    }
    // dictionary to level names
    const lvlNames = { 20: 'HARD', 40: 'MEDIUM', 60: 'EASY', custom: 'CUSTOM (' + howMuch + ')' };
    $('#level').html(lvlNames[this.name]);

    loaderAnimation(true);
    // a timeout to allow animation and html changes to show
    setTimeout(() => {
        randomizeInputs(howMuch);
    }, 10);
});

// Turn loading animation on/off
function loaderAnimation(show = false) {
    // clear timer interval
    window.clearInterval(interval);

    if (show) {
        // disable hint button
        $('#hint').prop('disabled', true);

        $('#loader').html(
            '<div class="loadingio-spinner-cube-2zx4f3ctido"><div class="ldio-1pkt0oqav2x"><div></div><div></div><div></div><div></div></div></div>'
        );
        $('h1').html('Generating...').css('color', '#DA1212');
    } else {
        $('#loader').html('');
        $('h1').html('Good Luck!').css('color', '#313552');

        // timer repeater
        timer = 0;
        interval = setInterval(() => {
            timer += 1;
            timerElement.html(formatTime());
        }, 1000);
    }
}

// Format timer to hours:minutes:seconds
const formatTime = () => {
    return ~~(timer / 3600) + ':' + ~~(timer / 60 - ~~(timer / 3600) * 60) + ':' + (timer % 60);
};

// Auto-Check slider changed
$('.checkbox-custom').on('click', () => {
    // change from true to false and otherwise
    autoCheck = !autoCheck;
    // click finish button to restyle inputs
    $('#finish').click();
});

// Custom difficulty input
$('#howMuch').on('input', function () {
    // allow only number 1-81
    return (this.value = this.value.replace(/[^0-81]/g, ''));
});
