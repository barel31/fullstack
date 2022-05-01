function anagram(str1, str2) {
    if (typeof str1 !== 'string')
        throw 'Only string accepted.';
    
    if (str1.length !== str2.length)
        return false;
    
    str1 = str1.split('');
    str2 = str2.split('');
    
    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j < str1.length; j++) {
            if (str1[j] < str1[i]) {
                let tmp = str1[i];
                str1[i] = str1[j];
                str1[j] = tmp;
            }
            if (str2[j] < str2[i]) {
                let tmp = str2[i];
                str2[i] = str2[j];
                str2[j] = tmp;
            }
        }
    }

    for (let i = 0; i < str1.length - 1; i++) {
        if (str1[i] !== str2[i]) {
            console.log(str1[i]);
            console.log(str2[i]);
            return false;
        }
    }
    return true;
}

let str1 = 'bacd';
let str2 = 'dbac';
console.log(anagram(str1, str2));
