const moves = document.getElementById("movesCount");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");


let cards;
let interval;
let firstCard = false;
let secondCard = false;


// items array
const items = [{name: "bee", image:"bee.png"},
{name:"crocdile" , image:"crocodile.png"},
{name:"macaw" , image:"macaw.png"},
{name:"gorilla" , image:"gorilla.png"},
{name:"tiger" , image:"tiger.png"},
{name:"monkey" , image:"monkey.png"},
{name:"chameleon" , image:"chameleon.png"},
{name:"piranha" , image:"piranha.png"},
{name:"anaconda" , image:"anaconda.png"},
{name:"sloth" , image:"sloth.png"},
{name:"cockatoo" , image:"cockatoo.png"},
{name:"toucan" , image:"toucan.png"},
];

// initial time

let seconds = 0,
minutes = 0;

//initial moves and win count
let movesCount = 0, 
winCount = 0;

//for timer
const timerGenerator = () => {
    seconds += 1;
    //minus logic
    if(seconds >= 60){
        minutes += 1;
        seconds = 0
    }
    //format time before displaying
    let secondsValue = seconds < 10 ? `${seconds}` : seconds ;
    let minutesvalues = minutes < 10 ? `${minutes}`: minutes ;
    timeValue.innerHTML = `<span>Time:</span>${minutesvalues}: ${secondsValue}`;
};

//for calcultor
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Move:</span>${movesCount}`
}

// pick random object from the items array
const generateRandom = (size = 4) => {
   let tempArray = [...items];
   let cardValues = [];
  //size shoulde be double
  size = (size * size) / 2;
  for(let i = 0 ;i < size ; i++){
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1)
  }
  return cardValues;
}
const matrixGenerator = (cardValues, size = 4) => {
     gameContainer.innerHTML = "";
     cardValues = [...cardValues, ...cardValues]
     cardValues.sort(() => Math.random() - 0.5)
     for(let i= 0 ; i<size*size ; i++){
        gameContainer.innerHTML += `
        <div class="card-container" data-card-value="${cardValues[2].name}">
             <div class="card-before">?</div>
             <div class="card-after">
               <img src="${cardValues[i].image}" class="image"/>
             </div>
        </div>`;
    
     }
}
// initialize values and function
const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
}

initializer();