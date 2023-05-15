const buttonStart = document.getElementById("start")

const buttonStop = document.getElementById("stop")

const buttonReset = document.getElementById("reset")

let seconds = 00;

let tens = 00;

let appendTens = document.getElementById("tens")

let appendSeconds = document.getElementById("seconds")

let Interval

buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10)
}

buttonReset.onclick = function () {
    clearInterval(Interval)
    tens = "00"
    seconds = "00"
    appendSeconds.innerHTML = seconds
    appendTens.innerHTML = tens
}

buttonStop.onclick = function () {
    clearInterval(Interval)
}

function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;

    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}