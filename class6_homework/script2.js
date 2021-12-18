function p1(num) {
    while (num) {
        let last = num % 10;
        let first = get_first_digit(num);

        if (last != first[1]) {
            return false;
        }
        let remove = first[1];
        for (let i = 0; i < first[0]; i++) {
            remove *= 10;
        }
        num -= remove; // remove first digit
        num = (num / 10) | 0; // remove last digit
    }

    return true;
}
function get_first_digit(num) {
    let count = 0;
    while (num >= 10) {
        num = (num / 10) | 0;
        count++;
    }
    return [count, num];
}
function p1_better(num) {
    let savedNum = num,
        rev = 0,
        first;

    while (num) {
        first = num % 10;
        rev = rev * 10 + first;
        num = (num - first) / 10;
    }
    return rev == savedNum;
}
// console.log(p1_better(101));
// console.log(p1(112211));
// console.log(p1(849210));
// console.log(p1(44566544));
// console.log(p1(14566547));

function p2(email) {
    if (email.length < 5) {
        return false;
    }

    let shtrudelIndex = email.indexOf("@");
    if (
        shtrudelIndex == -1 ||
        !is_contain_alpha(email.slice(0, shtrudelIndex)) ||
        !is_contain_alpha(email.slice(shtrudelIndex + 1))
    ) {
        return false;
    }

    let ending = email.slice(email.indexOf(".") + 1);
    if (ending.length < 2) {
        return false;
    }
    for (let i = 0; i < ending.length; i++) {
        if (!is_contain_alpha(ending.charAt(i))) {
            return false;
        }
    }

    return true;
}
function is_contain_alpha(str) {
    // Atleast 1 char in the str
    for (let i = 0; i < str.length; i++) {
        if (
            (str[i] >= "A" && str[i] <= "Z") ||
            (str[i] >= "a" && str[i] <= "z")
        ) {
            return true;
        }
    }
    return false;
}
// console.log(p2("barel1@sdasd.com"));

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

    // Convert date
    let days = (Number(day) + num) % 30;
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
    // if (!months) months++;

    return days + "." + months + "." + years;
}
function p3_better(date, num) {
    let day, month, year;
    let firstDot = date.indexOf(".");
    let secondDot = date.indexOf(".", firstDot + 1);

    day = Number(date.slice(0, firstDot));
    month = Number(date.slice(firstDot + 1, secondDot));
    year = Number(date.slice(secondDot + 1));

    day += num;
    while (day > 30) {
        day -= 30;
        if(month < 12) {
            month++;
        }
        else {
            month = 1;
            year++;
        }
    }
    return day + "." + month + "." + year;
}
console.log(p3("30.2.2020", 12333323));
console.log(p3_better("30.2.2020", 12333323));
// console.log(p3("1.1.2010", 365));

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

    if (num > 1) {
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
// p4(8);
// p4(10);
// p4(30);

function p5(num) {
    let buffer = "";

    // first line
    for (let j = num; j > 0; j--) {
        buffer += "*";
    }
    buffer += "*\n";

    for (let i = 1, space = num - 2; i < num / 2; i++, space -= 2) {
        for (let j = i; j > 0; j--) {
            buffer += " ";
        }
        buffer += "*";

        for (j = 1; j <= space; j++) {
            buffer += " ";
        }
        buffer += "*\n";
    }

    // last line
    for (let j = num / 2; j > 0; j--) {
        buffer += " ";
    }
    buffer += "*";

    console.log(buffer);
}
p5(10);
p5_old2(10);
// 10
//***********               10*
// *       *                1spaces | * | 7spaces | *
//  *     *                 2spaces | * | 5spaces | *
//   *   *                  3spaces | * | 3spaces | *
//    * *                   4spaces | * | 1space | *
//     *                    5spaces | *

// 6
//  *                          3spaces | * |
// * *                         2spaces | * | 1spaces
//*****                        6*

function p5_old2(num) {
    let buffer = "";

    // first line
    for (let j = num / 2; j > 0; j--) {
        buffer += " ";
    }
    buffer += "*\n";

    for (let i = num / 2 - 1, space = 1; i >= 1; i--, space += 2) {
        for (let j = i; j > 0; j--) {
            buffer += " ";
        }
        buffer += "*";

        for (j = 1; j <= space; j++) {
            buffer += " ";
        }
        buffer += "*\n";
    }

    // last line
    for (let j = num; j >= 0; j--) {
        buffer += "*";
    }

    console.log(buffer);
}
// BARMUDA meshulash mistake.OLD
// function p5_old_old(num) {
//     let firstAndLast = '*', middle = '', space = '';

//     for(let i = 1; i <= num; i++) {
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
//         console.log(middle+'\n'+firstAndLast);
//     } else {
//         console.log(firstAndLast+'\n'+middle);
//     }
// }
// function p5_old(num) {
//     let last = "",
//         spaces = "",
//         middle = "",
//         first = "";

//     last += "\n";
//     for (let i = 1; i <= num; i++) {
//         last += "*";
//     }

//     for (let i = 1; i < num / 2; i++) {
//         first += " ";
//     }
//     first += "*";

//     for (let i = 1; i <= num; i++) {
//         for (let j = num / 2; j > 0; j--) {
//             spaces += " ";
//         }
//         spaces += "*";
//         for (let j = num / 2; j > 0; j--) {
//             spaces += " ";
//         }
//         spaces += "\n";
//     }
//     console.log(first + spaces + last);
// }
