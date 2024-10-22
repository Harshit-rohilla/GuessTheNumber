let guess=document.querySelector("#num")
let rNum=Math.round(Math.random()*100+1);
let submit=document.querySelector("#sub");
let guessAttempt=1;
let end=document.querySelector(".end");
let guessRem=document.querySelector(".guessRem")
let preGuess=document.querySelector("#pguess")
let newBut=document.querySelector("#newbut")
let arr=[];
console.log(rNum);
submit.addEventListener("click",function(e){
    e.preventDefault();
    let guessValue=parseInt(guess.value);
    if(guessValue>100 || guessValue<1 || isNaN(guessValue)){
        validate(guessValue);
    }
    else if(guessValue!=rNum && guessAttempt<11){
        guessCount.innerHTML=`${10-guessAttempt}`
        guessAttempt++;
        arr.push(guessValue);
        preGuess.innerHTML=`${arr.join(', ')}`
        hint(guessValue);
        
    }
    else if(guessAttempt>=11){
        newGame();
    }
    else if(guessValue===rNum){
        win(guessValue);
    }
    

})
newBut.addEventListener("click",function(e){
    newGameButton();
})
function validate(guessValue){
    if(guessValue<1){
        end.innerHTML=`Please Enter The Number Greater Than 1`
    }
    else if(guessValue>100){
        end.innerHTML=`Please Enter The Number Less Than 100`
    }
    else{
        end.innerHTML=`Please Enter A Number`
    }
}
function hint(guessValue){
    if(guessValue<rNum){
        end.innerHTML=`THINK BIGGER`
    }
    else if(guessValue>rNum){
        end.innerHTML=`THINK SMALLER`
    }
}
function win(guessValue){
    end.innerHTML=`CONGRATULATIONS WORD WAS ${rNum}`
    guessAttempt=1;
    preGuess.innerHTML=``
    guessCount.innerHTML=``
    guess.innerHTML=``
    newBut.style.width='100px';
    newBut.style.height='30px';
    newBut.innerHTML=`New Game`;
    guessAttempt=1;
    
    guess.value=``
    guess.setAttribute('disabled', true);
    arr=[]

}
function newGame(){
    
    end.innerHTML=`You Have Exhausted All Of Your Guesses Start A New Game `
    newBut.style.width='100px';
    newBut.style.height='30px';
    newBut.innerHTML=`New Game`;
    guessAttempt=1;
    preGuess.innerHTML=``
    guessCount.innerHTML=``
    guess.value=``
    guess.setAttribute('disabled', true);
    arr=[]

}
function newGameButton(){
    end.innerHTML=''
    newBut.style.width='0';
    newBut.style.height='0';
    newBut.innerHTML=``;
    guessAttempt=1;
    preGuess.innerHTML=``
    guessCount.innerHTML=``
    guess.value=``
    guess.removeAttribute('disabled');
    arr=[];


}
