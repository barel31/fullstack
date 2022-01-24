const q1 = (arr) => {
    const div = document.getElementById('main');
    arr.forEach((name) => {
        let btn = document.createElement('button');
        btn.innerHTML = name;
        div.appendChild(btn);
    });
};

q1(['asd', 'sad', 'asd']);

let numbers = [1, 26, 3, 57, 8, 53, 8, 9, 52];

let evenArr = numbers.filter((num) => num % 2 === 0);

console.log(evenArr);
