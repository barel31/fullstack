function q1(mat) {
    let counter = 0,
        sum = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
            counter++;
        }
    }
    return sum / counter;
}

function q2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - 1 - i; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// console.log(q2([232,24,34,1234,1243,4,1,2134,45]));

function q3(arr, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] == arr2[j]) {
                let flag = false;
                for (let k = 0; k < arr3.length; k++) {
                    // check if arr3 contain the new value
                    if (arr3[k] == arr[i]) {
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    arr3.push(arr[i]);    
                }
            }
        }
    }
    return arr3;
}
// let first = [1,2,2,3];
// let sec = [1,4,2,5,2,8,4];
// console.log(q3(first, sec));

function q4(mat) {
    let counter = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            let num = mat[i][j];

            let flag = false;
            for (let k = 2; k < num; k++) {
                if (num % k == 0) {
                    flag = true;
                    break;
                }
            }
            if (!flag && num > 1) {
                counter++;
                console.log(num);
            }
        }
    }
    return counter;
}
// console.log(q4([[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]]));

function q5(mat) {
    let counter = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] >= "A" && mat[i][j] <= "Z") {
                counter++;
            }
        }
    }
    return counter;
}
 
function q6(mat) {
    let counter = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (!mat[i][j]) {
                // not 1
                continue;
            }
            if (
                (i && mat[i - 1][j]) ||
                (j && mat[i][j - 1]) ||
                (i && j && mat[i - 1][j - 1]) ||
                (j < mat[i].length && mat[i][j + 1]) ||
                (i < mat.length && mat[i + 1][j]) ||
                (i < mat.length && j <= mat.length - 2 && mat[i + 1][j + 1]) ||
                (i < mat.length && j && mat[i + 1][j - 1]) ||
                (j < mat[i].length && i && mat[i - 1][j + 1])
            ) {
                // not a valid island
                continue;
            }
            counter++;
            console.log(i, j);
        }
    }
    return counter;
}
// console.log(
//     q6([
//         [0, 0, 0, 1, 0, 0, 0],
//         [1, 0, 0, 0, 0, 1, 0],
//         [0, 1, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 1, 1, 0, 0, 0, 0],
//     ])
// );

function q7(mat) {
    for (let i = 0; i < 9; i++) {
        if (mat[i].length < 9) {
            return false;
        }
        // let arr = [];
        // for (let j = 0; j < 9; j++) {
        //     arr.push(mat[i][j]);
        // }
        // faster, make a pointer
        let arr = mat[i];
        for (let j = 0; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length - 1 - i; k++) {
                if (arr[j] > arr[k]) {
                    let temp = arr[j];
                    arr[j] = arr[k];
                    arr[k] = temp;
                }
            }
        }
        for (let j = 0, n = 1; j < arr.length; j++, n++) {
            if (arr[j] != n) {
                return false;
            }
        }
    }
    return true;
}
// console.log(
//     q7([
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     ])
// );





































// function fibonacciGenerator (n) {
//     //Do NOT change any of the code above 👆

//     //Write your code here:
//     if(n === 1) {
//         return [0];
//     } else if(n === 2) {
//         return [0, 1];
//     }
//     var arr = [0, 1];
//     var x = 0;
//     var y = 1;
//     for (var i = 2; i < n; i++) {
//         var z = x+y;
//         x = y;
//         y = z;
//         arr.push(z);
//     }
//     return arr;
    
    
    
    
    
//     //Return an array of fibonacci numbers starting from 0.
    
// //Do NOT change any of the code below 👇
// }

// console.log(fibonacciGenerator(9999));