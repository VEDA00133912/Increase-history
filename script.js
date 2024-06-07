let intervalId = null;

document.getElementById('historyButton').addEventListener('click', () => {
    intervalId = setInterval(() => {
        const randomAnchor = Math.random().toString(36).substr(2, 6);
        const newURL = window.location.href.replace(/#.*/, '') + '#' + randomAnchor;
        window.location.href = newURL;
    }, 35);
});

document.getElementById('stopButton').addEventListener('click', () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

document.getElementById('titleInput').addEventListener('change', () => {
    const title = document.getElementById('titleInput').value || 'Google';
    document.title = title;
});

const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = 'images.png'; 
document.head.appendChild(favicon);
