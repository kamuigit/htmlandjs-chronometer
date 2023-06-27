var sec = 60;
var min = 25;


function timer(){
    sec--
    if (sec==0){
        min--;
        sec=60;
        if(min<0 && sec<=0){
            alert("Time Over")
            reset();
            stop();
        }
    }
    if(sec<10){
        sec = "0" + sec.toString();
    }
    document.getElementById("minutes-holder").innerHTML = min
    document.getElementById("seconds-holder").innerHTML = sec

}
function start(){
   timing= window.setInterval(timer,1000)
   document.getElementById("start").disabled = true;
   document.getElementById("stop").disabled = false;
   document.getElementById("reset").disabled = false;
}
function reset(){
    clearInterval(setInterval)
    min=25 
    sec="00"
    document.getElementById("minutes-holder").innerHTML = min
    document.getElementById("seconds-holder").innerHTML = sec
    sec=60
    document.getElementById("start").disabled = false;
    stop();
}
function stop(){
    clearInterval(timing)
}
