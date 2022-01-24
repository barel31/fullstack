let products = [
    { name: 'soy', price: 30 },
    { name: 'coco', price: 3 },
];

document.getElementById('input').addEventListener('input', function () {
    let Arr = products.filter((p) => p.price <= this.value);

    const output = document.getElementById('output');
    output.innerHTML = '';
    Arr.forEach((val) => {
        const ele = document.createElement('li');
        ele.innerHTML = val.name + ': ' + val.price + 'ILS';
        output.appendChild(ele);
    });
});
