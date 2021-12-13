// function p1(num) {
//     debugger
//     for(let i = 0; i < num.slice(); i++) {
//         for(let j = num.length; j < num.length/2; j--) {
//             if(num.charAt(i) != num.charAt(j)) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(p1(121));
// console.log(p1(849210));
// console.log(p1(44566544));
// console.log(p1('aabbs'));

// BARMUDA meshulash
// function p4(num) {
//     let firstAndLast = '*', middle = '', space = '';

//     for(let i = 2; i <= num; i++) {
//         firstAndLast += '*';
//         space += ' ';
//         if(i) {
//             middle += '\n'
//         }
//         middle += '*' + space.slice(1) + '*'
//     }
//     for(let i = 0; i < num-2; i++) {
//     }

//     if(num > 2) {
//         console.log(firstAndLast+'\n'+middle+'\n'+firstAndLast);
//     } else {
//         console.log(firstAndLast+'\n'+middle);
//     }
// }

function p4(num) {
    let firstAndLast = "*",
        middle = "",
        space = "";

    for (let i = 2; i <= num; i++) {
        firstAndLast += "*";
        space += " ";
    }
    for (let i = 0; i < num - 2; i++) {
        if (i) {
            middle += "\n";
        }
        middle += "*" + space.slice(1) + "*";
    }

    if (num > 2) {
        console.log(
            num + "\n" + firstAndLast + "\n" + middle + "\n" + firstAndLast
        );
    } else {
        console.log(num + "\n" + firstAndLast);
    }
}

// p4(1);
// p4(2);
// p4(3);
// p4(4);
// p4(5);
// p4(6);
// p4(7);
// p4(8);
// p4(9);
// p4(10);
// p4(20);
// p4(30);

function p3(date, num) {
    let day = "",
        dayCapture = false,
        month = "",
        monthCapture = false,
        year = "";

    for (let i = 0; i < date.length; i++) {
        if (date.charAt(i) >= "0" && date.charAt(i) <= "9") {
            if (!dayCapture) {
                day += date.charAt(i);
            } else if (!monthCapture) {
                month += date.charAt(i);
            } else {
                year = date.slice(i);
                break;
            }
        } else if (!dayCapture) {
            dayCapture = true;
        } else if (!monthCapture) {
            monthCapture = true;
        }
    }
    console.log("day " + day + " | month " + month + " | year " + year); // parsing date
    
    // debugger
    // Convert date
    let days = (Number(day) + num) % 30;
    if (!days) days++;
    let months = Number(month);
    let years = Number(year);

    let sum = num + day;
    if (sum > 30) {
        months += Math.floor((num + Number(day)) / 30);
    }

    if (months > 12) {
        months = months % 12;
        years += Math.floor((num + Number(day)) / 365);
    }
    if (!months) months++;

    return days + "." + months + "." + years;
}

// console.log(p3("30.2.2020", 51));
console.log(p3("1.1.2010", 365));
