function bubblemake(){

var bubble = "";
for(i=1;i<=160;i++){
    let random = Math.floor(Math.random()*10);
    bubble += ` <div class="bubble">${random}</div>`;
}
document.querySelector("#pbtm").innerHTML = bubble ; 
}

var hitsnum; 
function hitnum(){
    hitsnum = Math.floor(Math.random()*10);
 document.querySelector("#hit").textContent = hitsnum ; 
}

var time =6;
function timer(){
    let timeint = setInterval(() => {
        if(time > 0){
            time--;
            document.querySelector("#timerval").textContent = time;
        }else{
            clearInterval(timeint);
            document.querySelector("#plast").classList.remove("hide");
            document.querySelector("#pbtm").textContent = ``;
        }
      
    }, 1000);
}
let score = 0;
function increasescore(){
  score += 10 ; 
    document.querySelector("#scorenum").textContent = score;
    document.querySelector(".scoring").innerHTML = ` ${score}`;
}


document.querySelector("#pbtm").addEventListener("click",function(details)
    {
        var clickednum = Number(details.target.textContent);
        if(clickednum === hitsnum){
            increasescore();
            hitnum();
            bubblemake();
        }
    })
  document.querySelector(".reset").addEventListener("click",() => {
    document.querySelector("#plast").classList.add("hide");
    timer()
    hitnum()
    bubblemake()
    score = 0;
    time = 7;
  })
timer()
hitnum()
bubblemake()

