
// Pause the code
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Update the clock
function updateClock() {
    clock.textContent = new Date().toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
}

// Update the date
function updateDate() {
    date.textContent = new Date().toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' });
}

// Random image for background
function randomImg() {
    let images = [];
    for (let i = 1; i <= 8; i++) {
        images.push(`/assets/background/tapeta${i}.webp`);
    }
    let selectedImg = images[Math.floor(Math.random() * images.length)];
    let bgImg = document.createElement('div');
    bgImg.id = 'bgImg';
    bgImg.style.backgroundImage = `url(${selectedImg})`;
    document.body.appendChild(bgImg);
    setTimeout(() => {
        bgImg.style.opacity = 1;
    }, 20);
}

window.onload = async function() {
    //<----Load screen---->
    document.body.innerHTML = '';
    document.body.style.backgroundColor = 'black';
    let logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = '/assets/logo.png';
    let loading = document.createElement('img');
    loading.id = 'loading';
    loading.src = '/assets/loading.gif';
    document.body.appendChild(logo);
    document.body.appendChild(loading);
    await sleep(1000);
    logo.remove();
    await sleep(800);
    loading.remove();
    
    //<---- Login screen ---->
    randomImg();
    // Clock
    let clock = document.createElement('h1');
    clock.id = 'clock';
    updateClock();
    setInterval(updateClock, 60000);
    document.body.appendChild(clock);
    // Date
    let date = document.createElement('h4'); 
    date.id = 'date';
    updateDate();
    setInterval(updateDate, 86400000);
    document.body.appendChild(date);
    // Switch image
    let switchImg = document.createElement('div');
    switchImg.id = 'switchImg';
    switchImg.innerHTML = `<i class="bi bi-camera" style="margin-right: 10px;"></i>Nelíbí se vám obrázek?`;
    switchImg.onclick = randomImg;
    document.body.appendChild(switchImg);
    
}