let output = "",
    action = "";
let calc;

function Btn(val) {
    output += val;
    console.log(val);

    if (val == "C") {
        clear();
    } else if (val != "=" && !Number(val)) {
        action += val;
    }

    Update(val == "=");
}

function clear() {
    output = "";
    action = "";
}

// Update output
function Update(equal = false) {
    // TODO - think of a way to make order of operations.
    let outputElement = document.getElementById("calcInput");
    outputElement.value = output;
    // Button equal pressed
    if (equal) {
        // debugger;
        // const math = output.split(/[-+*/=]/);
        // find a way to skip regex from first char,
        // it's doesn't makes error tho.
        const math = output.substring(0, output.length - 1).split(/[-+*/=]/); // Split str by regex action
        console.log(math);
        console.log(action);
        // Handling math
        let res = Number(math[0]);
        for (let i = 0; i < action.length; i++) {
            if (action[i] == "+") {
                res += Number(math[i + 1]);
            } else if (action[i] == "-") {
                res -= Number(math[i + 1]);
            } else if (action[i] == "*") {
                res *= Number(math[i + 1]);
            } else {
                res /= Number(math[i + 1]);
            }
        }
        output += res;

        if (output.indexOf("NaN") == -1 /* && math.length == 2*/) {
            // Valid
            outputElement.value = output;
            clear();
        } else {
            // Invalid
            outputElement.value = "ERROR";
            clear();
        }
    }
}
