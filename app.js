
let gameseq=[];
let userseq=[];
let start=false;
let lvl=0;
let btns=["yellow","red","pink","green"];
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
   if(start==false){    
    console.log("Game sTARTED");
    start=true;
}

    lvlup();
})


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200)
}


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200)
}


function lvlup(){
    userseq=[];
    lvl++;
    h2.innerText=`Level ${lvl}`;
    let rn=Math.floor(Math.random()*3);
    let rc=btns[rn];

    let rando=document.querySelector(`.${rc}`);
  
    gameseq.push(rc);
    console.log(gameseq)
    btnflash(rando);
}

function check(i){
    

    if(userseq[i]==gameseq[i]){
        if(userseq.length==gameseq.length){
           setTimeout( lvlup,1000);
        }
    }
    else{
        h2.innerText=`Game over!  YOUR Score${lvl} restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },150);       
        reset();
    }
}

function btnpress(){
    
    let btn1=this;
    userflash(btn1);

    userclr=btn1.getAttribute("id");
    userseq.push(userclr);

    check(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btnn of allbtn){
    btnn.addEventListener("click",btnpress);
}

function reset(){
    start=false;
    lvl=0;  
gameseq=[];
userseq=[];
}