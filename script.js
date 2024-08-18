let timeSection = document.querySelector(".time-section");



// for time display in time section

let [hours, minutes, seconds] = [0, 0, 0];  // for starting value of time
let timer = null;

function stopWatch() {

    seconds++;   // increasing by 1
    if (seconds == 60) {     // seconds is equal to 60 so seconds will be 0 again  and minutes  start increasing by  1 
        seconds = 0;
        minutes++;

        if (minutes == 60) {   // minutes is equal to 60 so minutes will be 0 again  and hours start increasing by  1 
            minutes = 0;
            hours++;
        }
    }

    // if time is less than 10 then add one extra 0 with 0 (00)
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    // for diplaying timing
    timeSection.innerHTML = h + ":" + m + ":" + s;

}



//for play button

function watchStart() {
    if (timer !== null) {  // if timer has been already run when i click on play button so it stops

        clearInterval(timer);
    }

    timer = setInterval(stopWatch, 1000)   // stopwatch function runs into 1sec interval


}


// for stop stopwatch 
function stop() {
    clearInterval(timer);
}


// for restart the time 
function watchreset() {

    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];  // for starting value of time
    timer = null

    timeSection.innerHTML = "00:00:00";


}
