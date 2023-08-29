var rn
var score=0
function makeBubble(){
    var a = ""
    for( var i=0;i<208;i++)
    {
        a+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector("#pbottom").innerHTML = a;
}
function timer(){
    var t=60
    var tim = setInterval(function(){  
            
            var a = document.querySelector("#timer")            
            if(t>0)
            {
                t--
                a.innerHTML = t;                
            }
            else
            {
                document.querySelector("#pbottom").innerHTML = `<div class="gameover" ><div>Game Over</div><h6>Your Score : ${score}</h6></div>`
                document.querySelector("#score").innerHTML = "--";
                document.querySelector("#timer").innerHTML = "--";
                document.querySelector("#hit").innerHTML = "--"
                clearInterval(tim)
            }
    },1000)
}

function getHit(){
    rn = document.querySelector("#hit")
    rn.innerHTML = Math.floor(Math.random()*10)
    rn = document.querySelector("#hit").innerHTML
}
function getscore(){
    score+=10
    document.querySelector("#score").innerHTML = score;
}
document.querySelector("#pbottom")
.addEventListener("click",function(e){
    if(Number(e.target.textContent) == rn)
    { 
        makeBubble()
        getscore()
        getHit()
    }
})
getHit()
timer()
makeBubble()