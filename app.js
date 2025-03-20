let gameseq=[];
let userseq=[];

let btns=["yellow" ,"red","purple","green"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress", function() {
    if(started == false) 
    {
     console.log("game is started");
      started=true;

      levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
 
//  console.log(randIdx);
//  console.log(randcolor);
//  console.log(randbtn);
gameseq.push(randcolor);
console.log(gameseq);
gameFlash(randbtn);
}
function checkAns(idx){
    // console.log("curr level:" , level);
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length===gameseq.length){
          setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML=`Game Over! your score was <b>${level} </b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }
    function reset(){
        started=false;
        gameseq=[];
        userseq=[];
        level=0;
    }
