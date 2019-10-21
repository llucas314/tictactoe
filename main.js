const blocks = document.querySelectorAll('.block');


let color = "red";
createBoard();
// cycle through blocks adding eventlistener
function createBoard(){
    for(let i = 0; i < blocks.length; i++){
        blocks[i].dataset.isClicked = false;
        blocks[i].id = i+1;
        blocks[i].addEventListener('click', function(e){
            if (e.target.dataset.isClicked == "false"){
                e.target.style.backgroundColor = color;
                e.target.dataset.isClicked = true;
                e.target.dataset.color = color;
                checkForWin();
                hoverColor();
                changeColor();
                if (clickedAll()){
                    blocks.forEach(block=>{
                        console.log('all clicked')
                    })
                }
            }
            
        })
    }
}

function hoverColor(){
    blocks.forEach(block=>{
        block.classList.toggle('blue');
    })
}

function changeColor(){
    if (color === 'red'){
        color = 'blue';
    } else {
        color = 'red';
    }
}

function clickedAll(){
    let allClicked = true;
    blocks.forEach(block=>{
        if(block.dataset.isClicked != 'true'){
            allClicked = false;
        }
    })
    if(allClicked === true){
        return true;
    } else return false;
}
// definitely not DRY
function checkForWin(){
    if((blocks[0].style.backgroundColor === 'red' && blocks[1].style.backgroundColor === 'red' && blocks[2].style.backgroundColor === 'red')||
    (blocks[3].style.backgroundColor === 'red' && blocks[4].style.backgroundColor === 'red' && blocks[5].style.backgroundColor === 'red')||
    (blocks[6].style.backgroundColor === 'red' && blocks[7].style.backgroundColor === 'red' && blocks[8].style.backgroundColor === 'red')||
    (blocks[0].style.backgroundColor === 'red' && blocks[3].style.backgroundColor === 'red' && blocks[6].style.backgroundColor === 'red')||
    (blocks[1].style.backgroundColor === 'red' && blocks[4].style.backgroundColor === 'red' && blocks[7].style.backgroundColor === 'red')||
    (blocks[2].style.backgroundColor === 'red' && blocks[5].style.backgroundColor === 'red' && blocks[8].style.backgroundColor === 'red')||
    (blocks[0].style.backgroundColor === 'red' && blocks[4].style.backgroundColor === 'red' && blocks[8].style.backgroundColor === 'red')||
    (blocks[2].style.backgroundColor === 'red' && blocks[4].style.backgroundColor === 'red' && blocks[6].style.backgroundColor === 'red')
    ){
        console.log('red wins');
    } else if((blocks[0].style.backgroundColor === 'blue' && blocks[1].style.backgroundColor === 'blue' && blocks[2].style.backgroundColor === 'blue')||
    (blocks[3].style.backgroundColor === 'blue' && blocks[4].style.backgroundColor === 'blue' && blocks[5].style.backgroundColor === 'blue')||
    (blocks[6].style.backgroundColor === 'blue' && blocks[7].style.backgroundColor === 'blue' && blocks[8].style.backgroundColor === 'blue')||
    (blocks[0].style.backgroundColor === 'blue' && blocks[3].style.backgroundColor === 'blue' && blocks[6].style.backgroundColor === 'blue')||
    (blocks[1].style.backgroundColor === 'blue' && blocks[4].style.backgroundColor === 'blue' && blocks[7].style.backgroundColor === 'blue')||
    (blocks[2].style.backgroundColor === 'blue' && blocks[5].style.backgroundColor === 'blue' && blocks[8].style.backgroundColor === 'blue')||
    (blocks[0].style.backgroundColor === 'blue' && blocks[4].style.backgroundColor === 'blue' && blocks[8].style.backgroundColor === 'blue')||
    (blocks[2].style.backgroundColor === 'blue' && blocks[4].style.backgroundColor === 'blue' && blocks[6].style.backgroundColor === 'blue')
    ){
        console.log('blue wins');
    }
}