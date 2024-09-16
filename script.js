var hitrn;
var score = 0;


function makeBubbles(){
    var clutter = "";

for (i = 1; i <= 168; i++) {
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function timer(){
    var timer = 5;

    let timeint = setInterval(()=>{

        if(timer > 0){
            timer--
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000)

}

function gethit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function getScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


    document.querySelector("#pbtm").addEventListener("click", (detail)=>{
        let getno = Number(detail.target.textContent)

        if(hitrn === getno){
            getScore();
            gethit();
            // timer();
            makeBubbles();
        }
    })


gethit();
timer();
makeBubbles();