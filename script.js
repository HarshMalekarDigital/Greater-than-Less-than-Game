let rng = Math.floor((Math.random() * 10));
let number = Math.floor((Math.random() * 10));
let winStat = '';
let winCount = 0;

const cardpar = document.getElementById('cardpar');
cardpar.innerHTML = rng;

const showScore = document.getElementById('scoreDisplay');
const showStatus = document.getElementById('statusDisplay');

function cardCheck(){
  rng = Math.floor(Math.random() * 10);
  console.log();
  while(rng == number){rng = Math.floor(Math.random() * 10)};
}

function greaterThan(){
  if (number < rng){
    winStat = 'win.';
    number = rng;
    cardpar.innerHTML = number;
    showStatus.innerHTML = winStat;
    updateScore()
    cardCheck();  
  } else{
    winStat = 'lose.';
    number = rng;
    cardpar.innerHTML = number;
    showStatus.innerHTML = winStat;
    updateScore()
    cardCheck();
  }

}

function lessThan(){
  if (number > rng){
    winStat = 'win.';
    cardpar.innerHTML = number;
    number = rng;
    showStatus.innerHTML = winStat;
    updateScore()
    cardCheck();
  } else{
    winStat = 'lose.';
    cardpar.innerHTML = number;
    showStatus.innerHTML = winStat;
    number = rng;
    updateScore()
    cardCheck();
  }
}

function updateScore(){
  if(winStat === 'win.'){winCount = winCount + 1;}
  if(winStat === 'lose.'){winCount = 0;}

  showScore.innerHTML = winCount;
}
