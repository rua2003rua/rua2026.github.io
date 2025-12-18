function createSnow() {
    const container = document.getElementById('snow-container');
    
    // Create Snowflakes (Big amount)
    for (let i = 0; i < 150; i++) {
        let snowflake = document.createElement('div');
        snowflake.className = 'falling-item';
        snowflake.innerHTML = '❄';
        snowflake.style.color = '#ffffff';
        snowflake.style.fontSize = (Math.random() * 20 + 20) + 'px'; // Large size
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 5 + 7) + 's';
        snowflake.style.opacity = Math.random();
        container.appendChild(snowflake);
    }

    // Create "Happy New Year 2026" (Little amount)
    for (let i = 0; i < 5; i++) {
        let text = document.createElement('div');
        text.className = 'falling-item';
        text.innerHTML = 'Happy New Year 2026';
        text.style.color = '#ffffff';
        text.style.whiteSpace = 'nowrap';
        text.style.left = Math.random() * 100 + 'vw';
        text.style.animationDuration = (Math.random() * 10 + 10) + 's';
        text.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(text);
    }
}

document.addEventListener('DOMContentLoaded', createSnow);