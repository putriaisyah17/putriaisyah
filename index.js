document.addEventListener("DOMContentLoaded", function () {
    let uskLibraryLink = document.querySelector("a[href='https://library.usk.ac.id/']");
    if (uskLibraryLink) {
        uskLibraryLink.addEventListener("click", function () {
            alert("Anda akan dialihkan ke situs Perpustakaan Universitas Syiah Kuala.");
        });
    }

    document.getElementById("searchButton").addEventListener("click", function () {
        let searchText = document.getElementById("searchInput").value.toLowerCase();
        let content = document.querySelector("#home").innerHTML;

        if (searchText.trim() === "") {
            alert("Masukkan kata kunci terlebih dahulu!");
            return;
        }

        document.querySelector("#home").innerHTML = content.replace(/<mark>(.*?)<\/mark>/g, "$1");

        let regex = new RegExp(searchText, "gi");
        if (content.toLowerCase().includes(searchText)) {
            let highlightedContent = content.replace(regex, (match) => `<mark>${match}</mark>`);
            document.querySelector("#home").innerHTML = highlightedContent;
            document.getElementById("searchResult").innerText = `Hasil untuk: "${searchText}"`;
        } else {
            document.getElementById("searchResult").innerText = `Tidak ditemukan hasil untuk: "${searchText}"`;
        }
    });
});
