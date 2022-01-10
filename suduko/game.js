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
            ele.setAttribute('type', 'text');
            ele.setAttribute('maxlength', '1');
            ele.setAttribute('oninput', "this.value=this.value.replace(/[^0-9]/g,'');");
            board.appendChild(ele);
        }
    }
}
initBoard();
