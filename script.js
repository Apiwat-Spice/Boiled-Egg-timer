

const urlParams = new URLSearchParams(window.location.search);
const timeInMinutes = urlParams.get('time');
const imageUrl = urlParams.get('img');


if (!timeInMinutes) {
    window.location.href = "index.html";
}

let timeLeft = timeInMinutes * 60;
let countdown;
const timerDisplay = document.getElementById("timer");
const imageDisplay = document.getElementById("egg-image");


if (imageUrl) {
    imageDisplay.src = imageUrl;
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `เหลือเวลาอีก ${String(minutes).padStart(2, '0')} นาที ${String(seconds).padStart(2, '0')} วินาที`;
}

function startCountdown() {
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(countdown);
            timerDisplay.textContent = "ครบเวลา!";
            alert("ไข่ของคุณต้มเสร็จแล้ว!");
        }
    }, 1000);
}

document.getElementById("cancel").addEventListener("click", () => {
    clearInterval(countdown);
    window.location.href = "index.html";
});


updateDisplay();
startCountdown();