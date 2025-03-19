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

    // Animasi fade-in dan wave untuk teks "Temukan Sumber Belajar Digital"
    const resourceHeading = document.querySelector("section h2");
    resourceHeading.style.opacity = 0;
    resourceHeading.style.animation = "fadeIn 2s ease-in-out forwards, wave 2s infinite alternate";

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

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        nav a {
            transition: color 0.3s ease-in-out;
        }
        #searchButton {
            transition: transform 0.3s ease-in-out;
        }
        #searchButton:hover {
            transform: scale(1.1);
            animation: pulse 1s ease-in-out;
        }
    `;
    document.head.appendChild(style);

    // Pencarian dengan highlight
    document.getElementById("searchButton").addEventListener("click", function () {
        let searchText = document.getElementById("searchInput").value.toLowerCase();
        let content = document.querySelector("section").innerHTML;

        if (searchText.trim() === "") {
            alert("Masukkan kata kunci terlebih dahulu!");
            return;
        }

        document.querySelector("section").innerHTML = content.replace(/<mark>(.*?)<\/mark>/g, "$1");

        let regex = new RegExp(searchText, "gi");
        if (content.toLowerCase().includes(searchText)) {
            let highlightedContent = content.replace(regex, (match) => `<mark>${match}</mark>`);
            document.querySelector("section").innerHTML = highlightedContent;
            document.getElementById("searchResult").innerText = `Hasil untuk: "${searchText}"`;
        } else {
            document.getElementById("searchResult").innerText = `Tidak ditemukan hasil untuk: "${searchText}"`;
        }
    });
});
