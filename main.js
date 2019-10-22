const blocks = document.querySelectorAll('.block');
const reset = document.querySelector('input');
const outcome = document.querySelector('.outcome');
const again = document.querySelector('.again');
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
                    again.classList.add('show');
                    outcome.innerHTML= "It's a tie!";
                }
            }
            
        })
    }
}

reset.addEventListener('click', e=>{
    e.preventDefault();
    blocks.forEach(block=>{
        block.dataset.isClicked =false;
        block.style.backgroundColor = 'initial';
        block.classList.remove('red', 'blue');
    })
    again.classList.remove('show');
    color = 'red';
    outcome.innerHTML = "";
})

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
        outcome.innerHTML = 'Red Wins!';
        again.classList.add('show');
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
        outcome.innerHTML = 'Blue Wins!';
        again.classList.add('show');
        console.log('blue wins');
    }
}