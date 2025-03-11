document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman default
        
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (!validateEmail(email)) {
            alert("Masukkan email yang valid.");
            return;
        }
        
        if (!validatePhone(phone)) {
            alert("Masukkan nomor HP yang valid (hanya angka dan panjang minimal 10 digit).");
            return;
        }
        
        if (message.length < 10) {
            alert("Pesan harus berisi minimal 10 karakter.");
            return;
        }
        
        alert("Pesan Anda telah dikirim. Terima kasih telah menghubungi kami!");
        form.reset();
    });
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\d{10,15}$/;
    return phonePattern.test(phone);
}