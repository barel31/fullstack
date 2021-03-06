function p1(id) {
    if (id.length != 9) {
        return false;
    }

    for (let i = 0; i < 9; i++) {
        if (id[i] < "0" || id[i] > "9") {
            return false;
        }
    }

    return true;
}
// console.log(p1("234508900")); // true

function p2(num) {
    if (num % 1 == 0 && num % num == 0) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}
// console.log("Rishoni? " + p2(23)); // true

function p3(str) {
    let buffer = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z") {
            buffer += " " + str[i];
        } else {
            buffer += str[i];
        }
    }
    return buffer;
}
// console.log(p3(prompt())); // aBcBc -> a Bc Bc

let lastNum = 0;
function p4() {
    num = Number(document.getElementById("input").value);

    if (num > lastNum) {
        lastNum = num;
    }
    if (num < 0) {
        console.log(lastNum);
    }
}

function p4a(substr, str) {
    let counter = 0,
        index,
        lastMatchIndex;

    for (let i = 0; i < str.length; i++) {
        index = str.indexOf(substr, i);
        if (index != -1) {
            if (index != lastMatchIndex) {
                counter++;
                lastMatchIndex = index;
            }
        }
    }
    return counter;
}
// console.log(p4a("test", "testtttttesst"));

function p5(str) {
    let array = str.split(""),
        tmp;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (array[i] > array[j]) {
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array.join("");
}

function p5_alt(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length - 1 - i; j++) {
            if (str.charAt(j) > str.charAt(j + 1)) {
                str =
                    str.slice(0, j) +
                    str.charAt(j + 1) +
                    str.charAt(j) +
                    str.slice(j + 2);
            }
            counter++;
        }
    }
    return str + "\n" + counter;
}

// console.log(p5_alt("f0129mic981u4c0981mu4c-02u-0u8240-12u4c-cab")); // fcab -> abcf