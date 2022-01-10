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
                let br = document.createElement('br');
                board.appendChild(br);
                groupBackup = group;
                group -= 3;
            }
        }
        if(i % 3 === 0) {
            group = groupBackup;
        }
    }
}

function finish() {
    // Check if board has completed

    // Checks groups
    for(let j = 1; j <= 9; j++) {
        let inputs = document.querySelectorAll('.group'+j);
        for(let i = 1; i <= 9; i++) {
            
        }
    }
}

function isArrayNested(arr, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr[i] == arr2[j]) {
                let flag = false;
                for (let k = 0; k < arr3.length; k++) {
                    // check if arr3 contain the new value
                    if (arr3[k] == arr[i]) {
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    arr3.push(arr[i]);    
                }
            }
        }
    }
    return arr3;
}

function restart() {
    // Initilize restart

    let inputs = document.querySelectorAll('.input');
    for(let i = 0; i < 81; i++) {
        inputs[i].value = '';
    }
}