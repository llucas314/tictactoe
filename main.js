const blocks = document.querySelectorAll('.block');

let color = "red";

// cycle through blocks adding eventlistener
for(let i = 0; i < blocks.length; i++){
    blocks[i].dataset.isClicked = false;
    blocks[i].addEventListener('click', function(e){
        if (e.target.dataset.isClicked == "false"){
            e.target.style.backgroundColor = color;
            e.target.dataset.isClicked = true;
            changeColor();
        }
        
    })
}
// if color is red add red to block and hover ; color is blue

// function hoverColor(){
//     blocks.forEach(block=>{
//         block.
//     })
// }

function changeColor(){
    if (color === 'red'){
        color = 'blue';
    } else {
        color = 'red';
    }
}