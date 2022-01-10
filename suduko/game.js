initBoard();
function initBoard() {
    // Print board
    // debugger
    let board = document.getElementById('board');

    let ele;
    let group = 1;
    let groupBackup;
    for(let i = 1; i <= 9; i++) {
        for(let j = 1; j <= 9; j++) {

            ele = document.createElement('input');
            let groupClass = 'group' + group;
            ele.classList.add('input');
            ele.classList.add(groupClass);
            ele.setAttribute('name', 'input_' + i + '_' + j);
            ele.setAttribute('type', 'text');
            ele.setAttribute('maxlength', '1');
            ele.setAttribute('oninput', "this.value=this.value.replace(/[^1-9]/g,'');"); // 1-9 only
            board.appendChild(ele);

            if(j % 3 === 0) {
                group++;
            }
            if(j % 9 === 0) {
                let br = document.createElement('br')
                board.appendChild(br)
                groupBackup = group;
                group -= 3;
            }
            if(j === 9 && i % 3 === 0) {
                group++ 
            }
        }
        if(i % 3 === 0) {
            group = groupBackup;
        }
    }
}

function finish() {
    // Check if board has completed
}

function restart() {
    // Initilize restart

    let inputs = document.querySelectorAll('.input');
    for(let i = 0; i < 81; i++) {
        inputs[i].value = '';
    }
}