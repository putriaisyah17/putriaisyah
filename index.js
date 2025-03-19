document.addEventListener("DOMContentLoaded", function () {
    // Efek fade-in untuk seluruh halaman
    document.body.style.opacity = 0;
    document.body.style.animation = "fadeIn 1.5s ease-in-out forwards";

    // Efek fade-in untuk header
    const header = document.querySelector("header h1");
    header.style.opacity = 0;
    header.style.transition = "opacity 2s";
    setTimeout(() => {
        header.style.opacity = 1;
    }, 500);

    // Efek animasi wave pada teks "Halo, Selamat Datang!"
    const welcomeHeading = document.querySelector("#home h2");
    welcomeHeading.style.opacity = 0;
    welcomeHeading.style.animation = "fadeIn 2s ease-in-out forwards, wave 2s infinite alternate";

    // Tambahkan efek animasi ke tombol eksplorasi
    const exploreButton = document.querySelector(".explore-button");
    exploreButton.style.transition = "transform 0.3s ease-in-out";
    exploreButton.addEventListener("mouseover", () => {
        exploreButton.style.transform = "scale(1.1)";
    });
    exploreButton.addEventListener("mouseout", () => {
        exploreButton.style.transform = "scale(1)";
    });

    // Tambahkan fungsi pencarian di halaman dengan highlight
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResult = document.getElementById("searchResult");
    const contentContainer = document.querySelector("#home .container");
    let originalContent = contentContainer.innerHTML;
    
    searchButton.addEventListener("click", function () {
        let searchText = searchInput.value.toLowerCase();
        
        if (searchText.trim() === "") {
            alert("Masukkan kata kunci terlebih dahulu!");
            return;
        }

        contentContainer.innerHTML = originalContent.replace(/<mark>(.*?)<\/mark>/g, "$1");

        let regex = new RegExp(searchText, "gi");
        if (originalContent.toLowerCase().includes(searchText)) {
            let highlightedContent = originalContent.replace(regex, (match) => `<mark>${match}</mark>`);
            contentContainer.innerHTML = highlightedContent;
            searchResult.innerText = `Hasil untuk: "${searchText}"`;
        } else {
            searchResult.innerText = `Tidak ditemukan hasil untuk: "${searchText}"`;
        }
    });

    // Tambahkan efek bintang jatuh di header
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
            color: white;
            font-size: 20px;
            pointer-events: none;
            will-change: transform, opacity;
        }
    `;
    document.head.appendChild(style);

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
