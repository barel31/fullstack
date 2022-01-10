function initBoard() {
    let board = document.getElementById('board');

    let ele;
    for(let i = 1; i <= 9; i++) {
        ele = document.createElement('br');
        board.appendChild(ele);
        for(let j = 1; j <= 9; j++) {
            ele = document.createElement('input');
            ele.setAttribute('name', 'input_' + i + '_' + j);
            ele.setAttribute('id', 'input_' + i + '_' + j);
            ele.setAttribute('type', 'number');
            ele.setAttribute('min', '1');
            ele.setAttribute('max', '9');
            board.appendChild(ele);
        }
    }
}
initBoard();