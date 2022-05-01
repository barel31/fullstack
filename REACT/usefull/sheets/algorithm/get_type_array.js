function checkArr(arr) {
    // valid if arr is numeric
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') throw 'Array is not numberic';
    }

    // check if הנדסי
    let tmp = 0;
    let flag = true;
    let ratio = arr[1] / arr[0];
    for (let i = 1; i < arr.length; i++) {
        tmp = arr[i] / arr[i - 1];
        if (ratio === tmp) {
            ratio = tmp;
            continue;
        } else {
            flag = false;
            break;
        }
    }
    if (flag) return 'B';

    // check if חשבוני
    flag = true;
    ratio = arr[1] - arr[0];
    ratio;
    for (let i = 0; i < arr.length - 1; i++) {
        const two = arr[i + 1] - arr[i];
        if (two !== ratio) {
            flag = false;
            break;
        }
    }
    if (flag) return 'A';

    // check if fibo
    flag = true;
    let a, b;
    for (let i = 0; i < arr.length - 2; i++) {
        a = arr[i];
        b = arr[i + 1];
        if (arr[i + 2] === a + b) {
            continue;
        } else {
            flag = false;
            console.log('break');
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
