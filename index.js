// Penjelasan Dasar tentang JavaScript Menggunakan 5W1H

/*1. What (Apa itu JavaScript?)
  JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web interaktif.
  Contohnya: animasi, validasi formulir, dan pengelolaan konten dinamis di sebuah website.
*/
let bahasaPemrograman = "JavaScript"; 
console.log("Bahasa yang sedang kita pelajari adalah: " + bahasaPemrograman);

/* 2 . Who (Siapa yang membuat JavaScript?)
    JavaScript pertama kali dibuat oleh Brendan Eich pada tahun 1995 ketika bekerja di Netscape Communications.
    Awalnya, JavaScript dibuat hanya dalam 10 hari dan kini menjadi salah satu bahasa pemrograman terpopuler di dunia.
*/
let pembuat = "Brendan Eich";
let tahunDibuat = 1995;
console.log("JavaScript dibuat oleh " + pembuat + " pada tahun " + tahunDibuat);

/* 3. When (Kapan JavaScript digunakan?)
    JavaScript digunakan saat kita ingin menambahkan interaksi atau dinamika ke dalam halaman web.
    Contohnya, saat pengguna mengklik tombol, melakukan hover pada gambar, atau saat data dikirim tanpa memuat ulang halaman.
*/
let contohInteraksi = "klik tombol";
console.log("JavaScript digunakan saat pengguna melakukan interaksi, misalnya: " + contohInteraksi);

/*4. Where (Di mana JavaScript dijalankan?)
    JavaScript biasanya dijalankan di browser web (seperti Chrome, Firefox, dan Safari).
    Namun, berkat Node.js, JavaScript juga bisa dijalankan di sisi server, sehingga dapat digunakan untuk membangun aplikasi backend.
*/
let lingkunganBrowser = "Browser";
let lingkunganServer = "Server (melalui Node.js)";
console.log("JavaScript bisa dijalankan di: " + lingkunganBrowser + " dan " + lingkunganServer);

/*5. Why (Mengapa menggunakan JavaScript?)
JavaScript sangat penting untuk membuat halaman web lebih interaktif dan dinamis.
Selain itu, JavaScript memiliki komunitas besar, banyak framework, dan pustaka yang mendukung pengembangan aplikasi modern seperti React, Angular, dan Vue.
*/
let alasan = "Membuat halaman web lebih interaktif dan dinamis";
console.log("Mengapa kita menggunakan JavaScript? Karena: " + alasan);

/*6. How (Bagaimana cara menggunakan JavaScript?)
JavaScript dapat ditulis langsung di dalam file HTML menggunakan tag <script>, atau dipisah dalam file .js yang terpisah.
Browser kemudian akan menjalankan kode JavaScript ini untuk memanipulasi elemen di halaman web dan menambahkan fungsionalitas.
*/
let caraPenggunaan = "Di-embed dalam HTML atau dalam file .js terpisah";
console.log("Bagaimana cara kita menggunakan JavaScript? " + caraPenggunaan);

// Contoh sederhana interaksi:
function tampilkanPesan() {
    alert("Hello, selamat belajar JavaScript!");
}

/*Panggilan fungsi di sini
Untuk melihat hasilnya, coba jalankan tampilkanPesan() di browser setelah file ini terhubung ke HTML
console.log("Kode ini bisa memunculkan alert dengan pesan, coba panggil fungsi tampilkanPesan() di browser.");
*/