function q1(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
            counter++;
        }
    }
    return counter;
}
// console.log(q1(["123", "asdas", "132"]));

function q2(arr, index) {
    arr[index] = arr[arr.length - 1];
    arr.pop();
    return arr;
}
function q2_alt(arr, index, add) {
    arr.splice(index, 1);
    return arr;
}
// let color = ["zero", "red", "blue", "green"];
// console.log(q2(color, 2));
// console.log(q2_alt(color, 2));

function q3(mat) {
    let sum = 0;
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
        }
    }
    return sum;
}
// let sum = [[1,2,3],[4,5,6], [7, 8, 9]];
// console.log(q3(sum));

function q4(mat) {
    let counter = 0;
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] == 55) {
                 counter++;
            }
        }
    }
    return counter;
}
console.log(q4([1,2,[55,2],214,[55],[213,123,213]]));
function q5(mat) {
    let sum = 0;
    for(let i = 0; i < mat.length; i++) {
        sum += mat[i][i];
    }
    return sum;
}
// console.log(q5([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]));