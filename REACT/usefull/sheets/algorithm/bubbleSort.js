function sortstr(str) {
    let cnt = 0
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < str.length - 1 - j; i++) {
            if (str[i] > str[i + 1]) {
                str = str.slice(0, i) + str[i + 1] + str[i] + str.slice(i + 2);
            }
            cnt++
        }
    }
    return [str, cnt];
}

console.log(sortstr('dbaklsmadfgojasknfdioawsjfndosadfnjuawasdoifnoc'));
