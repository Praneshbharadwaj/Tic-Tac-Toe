const cells = document.querySelectorAll(".cell")
const statustext = document.querySelector("#statustext")
const restartbtn = document.querySelector("#restartbutton")
const WinConditions  = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let options = ["","","","","","","","",""];
let currentplayer = "X";
let running = false;
initializeGame();
function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    
    restartbtn.addEventListener("click",restartGame)
    statustext.textContent = `${currentplayer}'s Turn`
    running = true;
    
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    console.log(cellIndex)
    if(options[cellIndex]!=""||!running){
        return
    }
    updatecell(this,cellIndex)
    checkWinner();
} 
function updatecell(cell,index){
options[index] = currentplayer;
 cell.textContent = currentplayer
}
function changePlayer(){
    currentplayer = (currentplayer=="X")?"O":"X";
    statustext.textContent = `${currentplayer}'s Turn`
}
function checkWinner(){
    let roundWon = false;
    for(let i =0 ;i<WinConditions.length;i++)
    {
        const conditions = WinConditions[i];
        const cellA = options[conditions[0]]
        const cellB = options[conditions[1]]
        const cellC = options[conditions[2]]
        if(cellA == "" || cellB == ""||cellC=="")
        {
            continue;
        }
        if(cellA ==cellB&&cellB==cellC)
        {
             roundWon = true;
             break;
        }
    }    
    if(roundWon == true)
    {
        statustext.textContent = `${currentplayer} Wins!`
        running = false
    }
    else if(!options.includes(""))
    {
        statustext.textContent = `Draw!`
        running = false

    }
    else
    {
        changePlayer();
    }
}
function restartGame(){
    currentplayer = "X";
    let options = ["","","","","","","","",""];
    statustext.textContent = `${currentplayer}'s Turn`
    cells.forEach(cell=>cell.textContent = "");
    running = true;

    
}

 