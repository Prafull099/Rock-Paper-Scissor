let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
const message=document.querySelector("#msg");
const uses=document.querySelector("#userscore");
const coms=document.querySelector("#comscore");
 const gencomp=()=>{
    const options=["rock","paper","scissors"];
   const randomid= Math.floor(Math.random()*3);
//    selcet any index between 0 and 2 thats why we multiply 3..
   return options[randomid];// returning of index
 }
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    // generater computer choice
    const compchoice=gencomp()
    console.log("computer choice=",compchoice);
    if(userchoice== compchoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock")
        {
            userwin=compchoice == "scissors"? true:false;
        }
        else if(userchoice=="paper")
        {
            userwin=compchoice=="rock"? true:false;
        }
        else{
            userwin=compchoice=="paper"? true:false;
        }
        showwin(userwin,userchoice,compchoice);
    }

}
const showwin=(userwin,userchoice,compchoice)=>{
if(userwin)
{
    console.log("congratulations u wins");
    userscore++;
    uses.innerText=userscore;
    msg.innerText=`you win!!!!  :-{) ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
}
else{
    console.log("better luck next time");
    compscore++;
    coms.innerText=compscore;
    msg.innerText=`you loose!!! ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor="red";

}
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="play again";
    msg.style.backgroundColor="pink";

}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
});
});