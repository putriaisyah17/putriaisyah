document.addEventListener("DOMContentLoaded", function () {
    // Animasi fade-in untuk seluruh halaman
    document.body.style.opacity = 0;
    document.body.style.animation = "fadeIn 1.5s ease-in-out forwards";

    // Animasi fade-in untuk header
    const header = document.querySelector("header h1");
    header.style.opacity = 0;
    header.style.transition = "opacity 2s";
    setTimeout(() => {
        header.style.opacity = 1;
    }, 500);

    // Animasi wave pada teks "Halo, Selamat Datang!"
    const welcomeHeading = document.querySelector("#home h2");
    welcomeHeading.style.opacity = 0;
    welcomeHeading.style.animation = "fadeIn 2s ease-in-out forwards, wave 2s infinite alternate";

    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes wave {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(2deg); }
            100% { transform: rotate(-2deg); }
        }

        @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(300%) rotate(360deg); opacity: 0; }
        }

        .star {
            position: absolute;
            color: white; /* Warna bintang */
            font-size: 20px;
            pointer-events: none;
            will-change: transform, opacity;
        }
    `;
    document.head.appendChild(style);

    // Fungsi untuk membuat konfeti bintang hanya di dalam header
    function createStarConfetti() {
        const header = document.querySelector("header");
        if (!header) return;

        const star = document.createElement("div");
        star.classList.add("star");
        star.innerHTML = "☆"; 
        star.style.left = Math.random() * header.offsetWidth + "px";
        star.style.top = "-20px"; 
        star.style.fontSize = Math.random() * 20 + 10 + "px";
        star.style.opacity = Math.random();
        star.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

        header.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 5000);
    }

    setInterval(createStarConfetti, 300);
});
