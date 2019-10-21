const blocks = document.querySelectorAll('.block');

let color = "red";

// cycle through blocks adding eventlistener
for(let i = 0; i < blocks.length; i++){
    blocks[i].addEventListener('click', function(e){
        e.target.style.backgroundColor = color;
        changeColor();
    })
}
// if color is red add red to block and hover ; color is blue

// function hoverColor(){
//     blocks.forEach(block=>{
//         block.
//     })
// }

function onClick(blck){
    blck.style.backgroundColor = color;
    changeColor();
    blck.removeEventListener('click', onClick)
}
function changeColor(){
    if (color === 'red'){
        color = 'blue';
    } else {
        color = 'red';
    }
}