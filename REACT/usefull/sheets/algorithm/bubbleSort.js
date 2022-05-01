function sortNum(num) {
    num = `${num}`;
    
    for (let j = 0; j < num.length; j++) {
        for (let i = 0; i < num.length - 1 - j; i++) {
            if (num[i] > num[i + 1]) {
                num = num.slice(0, i) + num[i + 1] + num[i] + num.slice(i + 2);
            }
        }
    }
    return num;                           
}

console.log(sortNum(642531));
