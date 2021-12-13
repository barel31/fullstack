function p1(num) {
    for (let i = 0; i < num; i++) {
        let last = num % 10;
        let first = getFirstDigit(num);

        if (last != first[1]) {
            return false;
        }
        let remove = first[1];
        for (let i = 0; i < first[0]; i++) {
            remove *= 10;
        }
        num -= remove; // remove first digit
        num = Math.floor(num / 10); // remove last digit
    }

    return true;
}
function getFirstDigit(num) {
    let count = 0;
    while (num >= 10) {
        num = num / 10;
        count++;
    }
    return [count, Math.floor(num)];
}
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
// console.log(p2("barel@1sdasd.cm"));

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

// BARMUDA meshulash
// function p5(num) {
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

function p5(num) {
    let last = '\n', spaces = '', first='';
    for(let i = 1; i < num/2; i++) {
        first += ' ';
    }
    first += '*'

    for(let i = 1; i <= num; i++) {

        last += '*'
    }
    for(let i = 1; i <= num; i++) {
        spaces += ' ';
        for(let j = num/2; j > 0; j--) {
            spaces += '*'
        }
        spaces += '*\n'
    }
    console.log(first+spaces+last);
}
p5(5);