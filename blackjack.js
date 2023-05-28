let userMsg=document.querySelector('#userStatus');
let cardCount=document.querySelector('#cards');
let sumCards=document.querySelector('#sumCards');
let user=document.querySelector('#user');
//let startGame=document.querySelector('#startGame');
let sum=0;
let cards=[];
let alive=false;
let blackjack=false;
let message='';
let userName= prompt('Enter Your Name');
user.textContent="User Name :"+ "  " +userName;

function getRandomNumber(){
    let random= Math.floor( Math.random()*13 ) + 1
    if(random==1){
        return 11
    }else if(random >10){
        return 10
    }else{
        return random
    }
}

function startGame(){
    alive=true
    let firstCard=getRandomNumber();
    let secondCard=getRandomNumber();
     cards=[firstCard,secondCard];
     sum=firstCard + secondCard;
    renderGame();
}
function renderGame(){
    cardCount.textContent="Cards : " 
    for(let i = 0; i < cards.length; i++){
        cardCount.textContent += cards[i] + " + "; 
    }
     sumCards.textContent="Sum : " + sum;
     
if(sum <= 20){
     message='Want to Play a New Game?'; 
}else if(sum===21){
    message='Hurrah!You have got the BlackJack';
    blackjack=true
}else{
    message='Oops!You have lost';
    alive=false
}
userMsg.textContent=message;
}
function newCard(){
    if(alive === true && blackjack===false ){
    let newNum=getRandomNumber();
   sum += newNum;
   cards.push(newNum);
    renderGame();
}}