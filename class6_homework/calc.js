let output = "";
let calc, action;
// X = '', Y = '';

function Btn(val) {
    output += val;
    console.log(val);

    if (val == "C") {
        output = "";
    } else if (val != "=" && !Number(val)) {
        action = val;
    }

    Update(val == "=" ? true : false);
}

// Update output
function Update(equal = false) {
    let outputElement = document.getElementById("calcInput");
    outputElement.value = output;

    // Button equal pressed
    if (equal) {
        // const math = output.split(/[-+*/=]/); // find a way to skip regex from first char
        const math = output.substr(0, output.length - 1).split(action); // Split str by action
        console.log(math);

        // Math action
        if (action == "+") {
            output += Number(math[0]) + Number(math[1]);
        } else if (action == "-") {
            output += Number(math[0]) - Number(math[1]);
        } else if (action == "*") {
            output += Number(math[0]) * Number(math[1]);
        } else {
            output += Number(math[0]) / Number(math[1]);
        }

        // Validation
        if (output.indexOf("NaN") == -1 && math.length == 2) {
            outputElement.value = output;
            output = "";
        } else {
            // Not valid
            outputElement.value = "ERROR";
            output = "";
        }
    }
}

// for (let i = 0; i < output.length; i++) {
//     if (output[i] < '9' && output[i] > '0') {
//         continue;
//     }
//     if (
//         (output[i] != '/' &&
//             output[i] != '-' &&
//             output[i] != '+' &&
//             output[i] != '*' &&
//             output[i] != '=') ||
//         (output[i] == '=' && i && !Number.isInteger(output[i-1]))
//     ) {
//         output = '';
//         return (outputElement.value = 'ERROR');
//     }
// }
