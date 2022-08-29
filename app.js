const board = document.querySelector('#board');
const SQUARE_NUMBER = 500;
const colors = ['rgb(237, 229, 9)','rgb(55, 222, 26)','#07e7ba','#0777e7','#070be7','#930ec8'];
const colorBoard = document.querySelector('#colorBoard');
const colorBoardNumber = 6;
let arrCondition = [];


for (let i = 0; i < colorBoardNumber; i++){
    const colorSquare = document.createElement('div');
    arrCondition.push(false);
    colorSquare.classList.add('colorSquare');
    //colorSquare.id = 'i';
    colorSquare.style.backgroundColor = colors[i];
    colorSquare.addEventListener('click', () => {
        if (arrCondition[i] == false){
            colorSquare.style.border = `4px  solid rgb(39, 10, 132)`;
            arrCondition[i] = colors[i];

        } else {
            colorSquare.style.border = `0px  solid rgb(39, 10, 132)`;

            arrCondition[i] = false;
        }
            
        
    })

    colorBoard.append(colorSquare);
}


for(let i = 0; i < SQUARE_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    
   square.addEventListener('mouseover', () => {
   setColor(square);
   })
   square.addEventListener('mouseleave', () => {
    removeColor(square);
    })

    board.append(square);
}
function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor(){
   let newColors = filteredColor(arrCondition);
  const index = Math.floor( Math.random() * newColors.length);
   return newColors[index];
}
function filteredColor(arr){
    return arr.filter(item => item !== false)
}