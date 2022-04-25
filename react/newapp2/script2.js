function checkArr(arr) {
    // valid
    for (let i = 0; i < arr.length - 1; i++) {}

    // check for חשבוני
    let flag = true;
    for (let i = 0; i < arr.length - 3; i++) {
        const tmp = arr[i + 1] - arr[i];
        const tmp2 = arr[i + 3] - arr[i + 2];
        if (tmp === tmp2) {
            continue;
        } else {
            flag = false;
            break;
        }
    }
    if (flag) return 'A';

    // check for הנדסי
    flag = true;
    for (let i = 0; i < arr.length - 3; i++) {
        if (arr[i + 1] / arr[i] === arr[i + 3] / arr[i + 2]) continue;
        else {
            flag = false;
            break;
        }
    }
    if (flag) return 'B';

    // check for fibo
    flag = true;
    for (let i = 2; i < arr.length - 2; i++) {
        if (arr[i] + arr[i + 1] === arr[i + 2]) {
            continue;
        } else {
            flag = false;
            break;
        }
    }
    if (flag) return 'C';

    return 'D';
}

let arr = [1, 2, 3, 4, 5];
console.log(checkArr(arr));

let arr2 = [1, 2, 4, 8, 16];
console.log(checkArr(arr2));

let arr3 = [0, 1, 1, 2, 3, 5];
console.log(checkArr(arr3));
