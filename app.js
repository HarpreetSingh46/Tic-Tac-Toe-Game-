let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let body=document.querySelector("body");
let bttn= document.querySelector(".background")

let bg="light";

bttn.addEventListener("click",()=>{
  if(bg==="light"){


    body.style.backgroundColor="black"
    body.style.color="white"
    bg="dark"
  }else{
    body.style.backgroundColor="white"
    body.style.color="black"
    bg="light"
  }
})

let turnO = true; 
 let booyah=[[0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [6, 4, 2],
  [1, 4, 7],
  [2, 5, 8],
];


const resetgame=()=>{
  turnO=true;
  enableboxex()
  msgContainer.classList.add("hide");

}


const enableboxex=()=>{
  for(let dba of boxes){
    dba.disabled=false
    dba.innerText=""
  }
}


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
if(turnO){
    box.innerText="0"
    turnO=false
  }else{
    box.innerText="X"
    turnO=true
  }
    box.disabled = true;
       checkwinner()

  })
})

const showwinner=(winner)=>{
  msg.innerText=(`You are the winner bro ${winner}`)
  msgContainer.classList.remove("hide");

}

const checkwinner=()=>{
  for(let pattern of booyah){
    let post1=boxes[pattern[0]].innerText;
    let post2=boxes[pattern[1]].innerText;
    let post3=boxes[pattern[2]].innerText;

    if(post1 !="" && post2 !="" && post3!=""){
      if(post1===post2 && post2===post3){
        showwinner(post1)
        return 
      
      }
    }
  }

}

resetBtn.addEventListener("click",resetgame)
newGameBtn.addEventListener("click",resetgame)
