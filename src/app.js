const remainTime2 = document.querySelector(".d_day_days");
// ---------------------------------------------------

function diffDay() {
    const masTime2 = new Date("2025-04-29");
    const todayTime2 = new Date();

    const diff2 = masTime2 - todayTime2;

    const diffDay2 = Math.floor(diff2 / (1000*60*60*24));

    remainTime2.innerText = `D-${diffDay2}`
}

diffDay();
setInterval(diffDay, 1000);
// ---------------------------------------------------
const targetDate = new Date("2025-04-29T00:00:00").getTime();

function counting() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.querySelector(".timer").innerHTML = "D-Day!";
        clearInterval(interval);
        return;
    }

    const diffday = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMin = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const diffSec = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = diffday;
    document.getElementById("hours").textContent = diffHour;
    document.getElementById("minutes").textContent = diffMin;
    document.getElementById("seconds").textContent = diffSec;
}

const interval = setInterval(counting, 1000);
counting();
