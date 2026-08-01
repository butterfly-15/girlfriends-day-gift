// ========================================
// Smooth Scroll
// ========================================
function scrollToStory() {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
}

// ========================================
// Floating Hearts
// ========================================
const heartContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 30) + "px";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

setInterval(createHeart, 300);

// ========================================
// Together Counter
// CHANGE THIS DATE!
// Format: YYYY-MM-DD
// ========================================

const startDate = new Date("2025-08-27"); // <-- CHANGE THIS

function updateCounter() {

    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("daysTogether").innerHTML =
        days + " Days ❤️";
}

updateCounter();

// ========================================
// Popup
// ========================================

const popup = document.getElementById("popup");

document.getElementById("loveBtn").onclick = function () {

    popup.style.display = "flex";

    launchConfetti();

}

function closePopup() {

    popup.style.display = "none";

}

// ========================================
// Tiny Confetti
// ========================================

function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "10px";
        piece.style.height = "10px";

        piece.style.left = Math.random() * window.innerWidth + "px";
        piece.style.top = "-20px";

        piece.style.background =
            `hsl(${Math.random() * 360},100%,70%)`;

        piece.style.borderRadius =
            Math.random() > 0.5 ? "50%" : "0";

        piece.style.pointerEvents = "none";

        piece.style.zIndex = "5000";

        document.body.appendChild(piece);

        let y = -20;
        let x = parseFloat(piece.style.left);

        let speed = 2 + Math.random() * 4;
        let drift = -2 + Math.random() * 4;
        let rotate = Math.random() * 360;

        const fall = setInterval(() => {

            y += speed;
            x += drift;
            rotate += 5;

            piece.style.top = y + "px";
            piece.style.left = x + "px";
            piece.style.transform = `rotate(${rotate}deg)`;

            if (y > window.innerHeight + 30) {

                clearInterval(fall);

                piece.remove();

            }

        }, 16);

    }

}

// ========================================
// Fade-in Animation on Scroll
// ========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// ========================================
// Navbar Background on Scroll
// ========================================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(255,255,255,.18)";

    } else {

        nav.style.background = "rgba(255,255,255,.08)";

    }

});

// ========================================
// Welcome Message
// ========================================

console.log("❤️ Happy Girlfriend's Day ❤️");