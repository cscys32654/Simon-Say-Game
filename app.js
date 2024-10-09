let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;
let h2 =  document.querySelector("h2");
let btnsColor = ["red","green","yellow","blue"];

document.addEventListener("keypress", function(){
if(start == false){
console.log("game started");
start =  true;
levelUP();
}
});
//It shows random click 
function  gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash");
    },250);
}
//It shows user click
function  userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },250);
}

//It up the level until wrong sequnce does'nt enter
function levelUP(){
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random()*4);
    let randColor = btnsColor[ranIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(ranIdx);
    // console.log(randbtn);
    // console.log(btnsColor);
     gameSeq.push(randColor);
     console.log(gameSeq);
    gameflash(randbtn);

}
function checkUserInput(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUP, 1000);  // Call levelUP() after 1 second
            userSeq = [];  // Reset user sequence after successful input
        }
        
        console.log("same value");
    }else{
        h2.innerHTML = `Game Over! Your score was<b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },200);
        reset();
    }
}

//addEventListener in buttons 
function btnpress(){
    console.log(this);
    let  btn = this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkUserInput(userSeq.length - 1);
}

//eventListener
let allbtns =  document.querySelectorAll(".btn");
for(btns of allbtns){
    btns.addEventListener("click",btnpress);

}
//reset function
function reset(){
    start = false;
    level =0;
    gameSeq = [];
    userSeq = [];
}