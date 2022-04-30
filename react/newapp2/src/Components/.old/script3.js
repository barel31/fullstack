function pal(arr) {
    let str = arr.join('');
    let num = parseInt(str, 2);
    str = `${num}`;
    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if (str[i] !== str[j]) return false;
    }
    return true;
}

let arr1 = [1, 0, 1, 1, 0, 1]; // 43
console.log(pal(arr1));
