<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perpustakaan Personal Putri Aisyah Silalahi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <style>
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #ffffff; 
        color: #5D4037;
        display: flex;
        flex-direction: column;
        min-height: 100vh; 
    }
    header {
        background-color: #5D4037; 
        color: rgb(255, 255, 255);
        padding: 20px 50px;
        text-align: center;
        font-size: 16px;
    }
    nav {
        position: center;
        top: 45px;
        right: 40px;
    }
    nav a {
        margin: 0 5px;
        color: white;
        text-decoration: none;
        transition: color 0.3s; 
    }
    nav a:hover {
        color: white; 
    }
    h1 {
        color: #ffffff; 
        margin-bottom: 10px; 
        font-size: 25px;
    }
    h2 {
        color: #5D4037; 
        margin-top: 30px; 
        margin-bottom: 10px; 
        text-align: center;
    }
    h3 {
        margin-top: 15px; 
        margin-bottom: 5px; 
        text-align: justify;
        font-size: 18px;
    }
    h4 {
        margin-top: 15px; 
        margin-bottom: 5px; 
        text-align: justify;
        font-size: 18px;
    }
    a:hover {
        color: brown;
        font-weight: bold;
    }
    .container {
    width: 90%;
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.3s, color 0.3s;
    }
    p {
        line-height: 1.3;
        margin-bottom: 20px; 
        margin-top: 10px;
        text-align:justify;
    }
    ul {
        margin-bottom: 20px; 
        padding-left: 30px; 
        text-align:justify;
        line-height: 1.3;
    }
    .explore-button {
        display: inline-block;
        padding: 12px 24px;
        background-color: #5D4037;
        color: white;
        text-decoration: none;
        font-size: 16px;
        border-radius: 50px;
        transition: 0.3s;
    }
    
    .explore-button:hover {
        background-color: #e48f76; 
    }
    
    footer {
        text-align:center;
        padding: 5px;
        background-color: #5D4037;
        color: white;
        font-size: 0.8em;
    }
    blockquote#quote {
        margin-top: 10px;
        font-style: italic;
        font-size: 0.9em;
        color: #FFEBEE; 
    }
    mark {
        background-color: yellow;
        font-weight: bold;
    }
    </style>
        
</head>

<script src='index.js'></script>

<body>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<header>
    <h1>Perpustakaan Personal Putri Aisyah Silalahi</h1>
    <nav>
        <a href="about.html">Tentang Kami</a>
        <a href="contact.html">Hubungi Kami</a>
        <a href="e-resources.html">Sumber Daya Elektronik</a>
    </nav>
</header>
    <section id="home">
        <div class="container">
    <p><input type="text" id="searchInput" placeholder="Cari pada halaman..." />
        <button id="searchButton">Cari</button></p>
        <p id="searchResult"></p>
    <h2>Halo, Selamat Datang!</h2>
    <p>Selamat datang di Perpustakaan Personal Putri Aisyah Silalahi, merupakan website perpustakaan yang dirancang untuk memenuhi tugas Mata Kuliah Pengembangan Web-Praktik yang diampu oleh Himma Dewiyana, S.T., M.Hum. Perpustakaan ini sebuah ruang digital yang dirancang untuk menyediakan sumber informasi elektronik dan koleksi akademik pribadi. Perpustakaan ini berisi berbagai materi pembelajaran, tugas kuliah, serta referensi digital yang dapat diakses dengan mudah oleh mahasiswa dan pencari ilmu. Perpustakaan ini juga berkolaborasi dengan <a href="https://library.usk.ac.id/" target="_blank">Perpustakaan Universitas Syiah Kuala</a></li> untuk memperluas akses pengetahuan.</p>
    
    <h3>Temukan yang Anda Butuhkan!</h3>
    <p>Koleksi Pribadi menyediakan berbagai kumpulan tugas dan materi kuliah dari berbagai mata pelajaran yang disusun dengan rapi untuk mempermudah pencarian dan pemanfaatan. Sumber Informasi Elektronik mencakup akses ke berbagai jurnal, buku elektronik, dan referensi digital lainnya yang mendukung penelitian serta tugas akademik. Selain itu, melalui kerja sama dengan Perpustakaan Universitas Syiah Kuala, pengguna dapat memperoleh akses lebih luas ke koleksi digital, jurnal ilmiah, dan layanan perpustakaan yang lebih lengkap.</p>

    <h4>Akses Mudah, Ilmu Tanpa Batas!</h3>
    <p>Yuk, eksplorasi sekarang. Temukan referensi terbaik untuk mendukung pembelajaran dan peneltian anda!</p>
    <a href="e-resources.html" class="explore-button">Mulai Eksplorasi</a>
</div>

<section id="events">
    <div class="container">
        <h2>Event Terbaru</h2>

        <div class="event-item">
            <img src="images/PublicSpeaking1.jpeg" alt="Public Speaking 1" style="width:100%; max-height:250px; object-fit:cover; border-radius:8px;">
            <h3> WEBINAR PUBLIC SPEAKING VOL.1: “Peran Public Speaking dalam Meningkatkan Kompetensi Komunikasi Mahasiswa di Era Transformasi”</h3>
            <p><strong>Tanggal:</strong> 15 Januari 2025</p>
            <p>Webinar ini adalah sesi interaktif untuk membantu kalian mengasah keterampilan public speaking agar lebih percaya diri dan komunikatif. Tidak hanya itu, kalian juga akan belajar cara memaksimalkan potensi diri dalam membangun personal branding yang kuat!</p>
        </div>

        <div class="event-item">
            <img src="images/PublicSpeaking2.jpg" alt="Public Speaking 2" style="width:100%; max-height:250px; object-fit:cover; border-radius:8px;">
            <h3>Seminar Public Speaking Vol. 2: "Seni Berbicara di Depan Publik dengan Penuh Keyakinan"</h3>
            <p><strong>Tanggal:</strong> 21 Februari 2025</p>
            <p>Seminar ini menjadi kesempatan penting bagi mahasiswa untuk meningkatkan kompetensi komunikasi dan membangun keterampilan berbicara yang lebih baik.</p>
        </div>

        <div class="event-item">
            <img src="images/BukaBersama.jpg" alt="Buka Bersama" style="width:100%; max-height:250px; object-fit:cover; border-radius:8px;">
            <h3>Buka Puasa dan Berbagi Bersama IMPUS</h3>
            <p><strong>Tanggal:</strong> 21 Maret 2025</p>
            <p>Kesempatan untuk menikmati momen berbuka dalam suasana hangat dan penuh kebersamaan</p>
        </div>
    </div>
</section>


<p></p>
<footer>
  &copy; 2025 Perpustakaan Personal Putri Aisyah Silalahi
  <blockquote id="quote">📖 "Sebuah perpustakaan adalah rumah bagi jiwa-jiwa yang tertulis." - Pat Conroy </blockquote>
<footer>
</body>
</html> 
