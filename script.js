var countDownDate = new Date("Jul 10, 2024 15:37:25").getTime();
var interval;

function startCountdown() {
    clearInterval(interval);
    interval = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
    clearInterval(interval);
}

function updateCountdown() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}


