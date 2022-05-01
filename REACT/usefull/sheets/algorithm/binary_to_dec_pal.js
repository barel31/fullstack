function pal(arr) { 
/* Convert array binary to decimal number
*  return true if palindrom
*/
    // array to str
    let str = arr.join('');

    // binary to decimal
    let num = parseInt(str, 2);
    // back to str
    str = `${num}`;

    // loop throw str
    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        // if don't match return false
        if (str[i] !== str[j]) return false;
    }
    // return true
    return true;
}

let arr1 = [1, 0, 1, 1, 0, 1]; // 43
console.log(pal(arr1));

