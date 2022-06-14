class Data {
    length = 0;

    constructor(name, text, link, mark = false) {
        this.name = name;
        this.text = text;
        this.link = link;
        this.mark = mark;

        length++;
    }
}

const data = [
    new Data('Trivia Game', 'Play!', 'https://evening-oasis-66395.herokuapp.com/play', true),
    new Data('class-1 CV DEMO', 'index.html', 'class1_homework/index.html'),
    new Data(
        'class-2 signin/up templates',
        'signin.html signup.html',
        'class2_homework/signin.html class2_homework/signup.html'
    ),
    new Data('class-3 Bootstrap template', 'index.html', 'class3_homework/index.html', true),
    new Data('class-4 Summary of compiler and interpreter', 'index.html', 'class4_homework/index.html'),
    new Data('class-5 - DEMO Exchanger', 'index.html', 'class5_homework/index.html'),
    new Data('class-6 - Simple Calculator', 'index.html', 'class6_homework/index.html'),
    new Data('Dice Game', 'Play!', 'dice/dicee.html', true),
    new Data('Drum Kit', 'Play!', 'drum/index.html', true),
    new Data('Simon Say', 'Play!', 'simon/index.html', true),
    new Data('Sudoku', 'Play!', 'sudoku/index.html', true),
    new Data('Grade Graph Server Side', 'Heroku', 'https://evening-plains-58384.herokuapp.com/'),
    new Data('class-10 Signin/Signup Server Side', 'Heroku', 'https://still-ravine-70553.herokuapp.com/', true),
    new Data('War Game', 'Play!', 'https://barel31.github.io/war-game/', true),
    new Data('Smart-House', 'Go!', 'https://barel31.github.io/smart-house/', true),
    new Data('Tenbis Wage Calculator', 'Go!', 'https://barel31.github.io/tenbis-calculator/'),
    new Data('Best Movie', 'Go!', 'https://barel31.github.io/best-movie/', true),
    new Data('Travel Advisor', 'Go!', 'https://barel31.github.io/travel_advisor/', true),
    new Data('Portfolio', 'Go!', 'https://barel31.github.io/barel_portolio/', true),
];

const table = document.getElementById('table');
document.body.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (let i = 0; i < data.length; i++) {
    const tr = document.createElement('tr');
    if (data[i].mark) tr.style.backgroundColor = '#FEF9A7';
    tbody.appendChild(tr);

    const td = document.createElement('td');
    tr.appendChild(td);

    const h5 = document.createElement('h5');
    h5.innerHTML = data[i].name + ':';
    td.appendChild(h5);

    const td2 = document.createElement('td');
    tr.appendChild(td2);

    const linkArr = data[i].link.split(' ');
    const textArr = data[i].text.split(' ');
    for (let j = 0; j < linkArr.length; j++) {
        const link = document.createElement('a');
        link.innerHTML = textArr[j];
        link.setAttribute('href', linkArr[j]);
        link.setAttribute('target', '_blank');
        link.style.marginRight = '1vh';
        td2.appendChild(link);
    }
}
