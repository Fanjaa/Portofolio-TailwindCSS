// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//  Sound Effect & Popup & Modal Password
const clickText = document.getElementById('clickText');
const passwordModal = document.getElementById('passwordModal');
const submitPassword = document.getElementById('submitPassword');
const closePasswordModal = document.getElementById('closePasswordModal');
const passwordInput = document.getElementById('passwordInput');
const errorMessage = document.getElementById('errorMessage');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const audio = new Audio('src/sound/cinta_terakhir.mp3');
const correctPassword = "WdnFnj28*";

let isPlaying = false;
let intervalId = null;

clickText.addEventListener('click', function (e) {
    e.preventDefault(); 

    passwordModal.classList.remove('hidden');
});

submitPassword.addEventListener('click', function () {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        passwordModal.classList.add('hidden');
        popup.classList.remove('hidden');
     
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Create Hearts 
        function createHeart() {
            const heart = document.createElement('span');
            heart.className = 'heart text-red-500 text-4xl absolute fade-in'; 
            heart.innerHTML = '❤️';
            document.body.appendChild(heart);
            
            heart.style.left = `${Math.random() * window.innerWidth}px`;
            heart.style.top = `${Math.random() * window.innerHeight}px`;

            setTimeout(() => {
                heart.remove();
            }, 1500); 
        }

        intervalId = setInterval(createHeart, 100);

    } else {
        errorMessage.classList.remove('hidden');
    }
});

closePasswordModal.addEventListener('click', function () {
    passwordModal.classList.add('hidden'); 
    errorMessage.classList.add('hidden');
    passwordInput.value = ''; 
});

closePopup.addEventListener('click', function () {
    popup.classList.add('hidden');
    errorMessage.classList.add('hidden');
    passwordInput.value = ''; 

    if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    }

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' 
    });
});


// Slider Image
const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

setInterval(changeImage, 4000);

function changeImage() {
    images[currentIndex].classList.add('hidden');

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.remove('hidden');
};

// Feedback E-Mail
function handleFormSubmit(event) {
    event.preventDefault(); 
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.classList.remove('hidden');
    feedbackMessage.innerHTML = `
        Pesan tidak dapat dikirim karena <a href="https://docs.github.com/en" target="_blank" class="font-bold">GitHub Pages</a> tidak mendukung <a href="https://php.net/" target="_blank" class="font-bold">PHP.</a> <a class="text-secondary">Sebagai alternatif, </a> <a href="mailto:Irfannurroja28@gmail.com?subject=From%20TailwinCSS%20Portofolio&body=Tulis%20Pesan%20Di%20Sini:%0A%0A%0A" class="text-primary underline font-bold">klik di sini </a> <a class="text-secondary">untuk mengirim email.</a>
    `;
};