let gameSeq=[];
let userSeq=[];
let button=["div1","div2","div3","div4"];
let started=false;
let level=0;

document.addEventListener("keydown",function(){
    if(started==false){
         console.log("game started");
         started=true;
         let p=document.querySelector("p");
         p.style.backgroundColor="black";
         levelup();
}});
function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },500);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },500);
}
function levelup(){
    userSeq=[];
    level++;
    let p=document.querySelector("p");
    p.innerText=`Level ${level}`;
    let randindex=Math.floor(Math.random()*3);
    let randbtn=button[randindex];
    let btn=document.querySelector(`#${randbtn}`);
    gameSeq.push(randbtn);
    gameFlash(btn);

}
function check(idx){
    
    console.log(gameSeq);
    console.log(userSeq);
    if(userSeq.length==gameSeq.length){
        if(gameSeq[idx]===userSeq[idx]){
            setTimeout(levelup,1000);
        }   
        else{
            let p=document.querySelector("p");
            p.innerText=`game over your score is ${level-1}`;
            p.style.backgroundColor="red";
            reset();
        } 
    }
    
       
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
   
}
function buttonPress(){
    console.log(this);
    let  btn=this;
    userFlash(btn);
    let btncolor=btn.getAttribute("id");
    userSeq.push(btncolor);

    check(userSeq.length-1);
}
let allbtn=document.querySelectorAll(".div");
for(btn of allbtn){
    btn.addEventListener("click",buttonPress);
}
