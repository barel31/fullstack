// function Func1(num1, num2) {
//     if(num1 < num2) {
//         return num1;
//     }
//     else {
//         return num2;
//     }
// }

// function Func2(str1, str2, str3, str4) {
//     let count = 0;

//     if(str1.length > 3) {
//         count++;
//     }
//     if(str2.length > 3) {
//         count++;
//     }
//     if(str3.length > 3) {
//         count++;
//     }
//     if(str4.length > 3) {
//         count++;
//     }

//     return count;
// }
// function Func2Alt(array) {
//     let count = 0;
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].length > 3) {
//             count++;
//         }
//     }

//     return count;
// }

// function Func3() {
//     let input = document.getElementById("input").value;

//     // let index = input.indexOf('A');
//     // while(index != -1) {
//     //     let code = input.charCodeAt(index);
//     //     let lower = String.fromCharCode(code+32);
//     //     input = input.substr(0, index) + lower + input.substr(index+1);
//     //     index = input.indexOf('A');
//     // }
//     for(let c = 0; c < input.length; c++) {
//         if(input[c] == 'A') {
//             input = input.substr(0, c) + 'a' + input.substr(c+1);
//         }
//     }
//     console.log(input);
// }

// function Func4(num) {
//     if(num % 2 == 0) {
//         console.log("Not Odd");
//     } else {
//         console.log("Odd");
//     }

//     if(num < 0) {
//         console.log("Negative");
//     }
//     else if(num > 0) {
//         console.log("Positive");
//     } else {
//         console.log("ZERO");
//     }
// }

// function Func5(str) {
//     if(str[0] == str[str.length-1]) {
//         return str.substr(1, str.length-2);
//     }
//     return str;
// }

// function Func6(str) {
//     let index = str.indexOf('*');
//     if(index != -1) {
//         str = str.substr(0, index) + str.substr(index+1);
//     }

//     index = str.indexOf('@');
//     if(index != -1) {
//         str = '*' + str + '*'
//     }

//     index = str.indexOf('₪');
//     if(index != -1) {
//         return "new shekel";
//     }

//     return str;
// }

function Calculator() {
    let amount = Number(document.getElementById("amount").value);
    if(!amount) {
        // alert("Invalid number!");
        document.getElementById("innerResult").innerHTML = '';
        return;
    }
    let multiElement = document.getElementById("currencyType");
    let multi = Number(multiElement.value.substr(0, multiElement.value.length-1));
    if(!multi) {
        alert("Choose currency!");
        return;
    }

    let sign = multiElement.value.substr(multiElement.value.length-1);
    let result = amount + "₪ = " + parseFloat((amount/multi).toFixed(3)) + sign;
    document.getElementById("innerResult").innerHTML = result + "<br>(1" + sign + " = " + multi + "₪)";
}

// TODO - Find an API that will pull currency in real time.