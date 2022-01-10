initBoard();
function initBoard() {
    // Print board
    // debugger
    let board = document.getElementById('board');

    let ele;
    let groupCounter = 1;
    for(let i = 1; i <= 9; i++) {
        let index = 1;
        for(let j = 1; j <= 9; j++) {
            

            ele = document.createElement('input');
            let groupClass = 'group' + index;
            ele.classList.add('input');
            ele.classList.add(groupClass);
            ele.setAttribute('name', 'input_' + i + '_' + j);
            ele.setAttribute('type', 'text');
            ele.setAttribute('maxlength', '1');
            ele.setAttribute('oninput', "this.value=this.value.replace(/[^1-9]/g,'');"); // 1-9 only
            if(i % 3 === 0 && j % 3 === 0) {
                groupCounter++;
                ele.value = 1;
                
            }
            board.appendChild(ele);

            if(j % 9 === 0) {
                // ele.value = 1;
                br = document.createElement('br');
                board.appendChild(br);
            }
            if(j % 3 === 0) {
                index++;
            }
        }
        if(i % 3 === 0) {
            index++;
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