let intervalId = null;

const titleInput = document.getElementById('titleInput');
const startBtn = document.getElementById('historyButton');
const stopBtn = document.getElementById('stopButton');

// タイトルをすぐに反映
titleInput.addEventListener('input', () => {
    document.title = titleInput.value.trim() || 'Google';
});

startBtn.addEventListener('click', () => {
    if (intervalId) return;

    intervalId = setInterval(() => {
        const randomAnchor = Math.random().toString(36).substr(2, 6);
        location.hash = randomAnchor;
    }, 30);

    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }

    startBtn.disabled = false;
    stopBtn.disabled = true;
});