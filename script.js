
// Pause the code
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Random image for background
function randomImg() {
    let images = [];
    for (let i = 1; i <= 8; i++) {
        images.push(`assets/background/tapeta${i}.webp`);
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
    logo.src = 'assets/logo.png';
    let loading = document.createElement('img');
    loading.id = 'loading';
    loading.src = 'assets/loading.gif';
    document.body.appendChild(logo);
    document.body.appendChild(loading);
    await sleep(1200);
    logo.remove();
    await sleep(600);
    loading.remove();

    //<---- Lock screen ---->
    randomImg();
    // Clock
    let clock = document.createElement('h1');
    clock.id = 'clock';
    // Update the clock
    function updateClock() {
    clock.textContent = new Date().toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
    }
    updateClock();
    setInterval(updateClock, 60000);
    document.body.appendChild(clock);
    // Date
    let date = document.createElement('h4'); 
    date.id = 'date';
    // Update the date
    function updateDate() {
    date.textContent = new Date().toLocaleDateString('cs-CZ', { weekday: 'long', day: 'numeric', month: 'long' });
    }
    updateDate();
    setInterval(updateDate, 86400000);
    document.body.appendChild(date);
    // Switch image
    let switchImg = document.createElement('div');
    switchImg.id = 'switchImg';
    switchImg.innerHTML = `<i class="bi bi-camera" style="margin-right: 10px;"></i>Nelíbí se vám obrázek?`;
    switchImg.onclick = randomImg;
    document.body.appendChild(switchImg);

    //<----Login screen---->
    let loginScreen = document.createElement('div');
    loginScreen.id = 'loginScreen';
    document.body.appendChild(loginScreen);

    // User login
    let loginForm = document.createElement('div');
    loginForm.id = 'loginForm';
    loginScreen.appendChild(loginForm);

    // User picture
    let profilePic = document.createElement('img');
    profilePic.src = 'assets/defaultuser.png';
    profilePic.id = 'profilePic';
    loginForm.appendChild(profilePic);

    // Username
    let username = document.createElement('h2');
    username.textContent = 'Administrator';
    username.id = 'username';
    loginForm.appendChild(username);

    // Password
    let passwordInput = document.createElement('input');
    passwordInput.id = 'passwordInput';
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    loginForm.appendChild(passwordInput);
    // Password button
    let sendPasswordButton = document.createElement('button');
    sendPasswordButton.id = 'sendPasswordButton';
    sendPasswordButton.innerHTML = `<i style="color:white;" class="bi bi-arrow-right-short"></i>`;
    loginForm.appendChild(sendPasswordButton);
    // Show login screen on user activity
    function showLoginScreen(event) {
        if (event.target.id === 'switchImg' || event.target.closest('#switchImg')) {
            return;
        }
        if (loginScreen.style.top !== '0px') {
            loginScreen.style.top = '0';
        }
        resetHideLoginScreenTimer();
    }

    // Hide login screen on user inactivity
    let hideLoginScreenTimer;
    function resetHideLoginScreenTimer() {
        clearTimeout(hideLoginScreenTimer);
        hideLoginScreenTimer = setTimeout(() => {
            loginScreen.style.top = '-100%';
        }, 10000);
    }

    document.addEventListener('keydown', showLoginScreen);
    document.addEventListener('mousedown', showLoginScreen);
}
