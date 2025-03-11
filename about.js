document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("searchButton")) {
        document.getElementById("searchButton").addEventListener("click", function () {
            let searchText = document.getElementById("searchInput").value.toLowerCase();
            let content = document.querySelector("#about").innerHTML;

            if (searchText.trim() === "") {
                alert("Masukkan kata kunci terlebih dahulu!");
                return;
            }

            document.querySelector("#about").innerHTML = content.replace(/<mark>(.*?)<\/mark>/g, "$1");

            let regex = new RegExp(searchText, "gi");
            if (content.toLowerCase().includes(searchText)) {
                let highlightedContent = content.replace(regex, (match) => `<mark>${match}</mark>`);
                document.querySelector("#about").innerHTML = highlightedContent;
                document.getElementById("searchResult").innerText = `Hasil untuk: "${searchText}"`;
            } else {
                document.getElementById("searchResult").innerText = `Tidak ditemukan hasil untuk: "${searchText}"`;
            }
        });
    }
});