function sapa() {
       var nama = document.getElementById("namaInput").value;
       document.getElementById("hasil").innerText = "Halo, " + nama + "! Salam kenal ya!";
   }
function gantiWarna() {
       var warna = ["#1a1a2e", "#16213e", "#0f3460", "#e94560", "#533483"];
       var random = Math.floor(Math.random() * warna.length);
       document.body.style.backgroundColor = warna[random];
   }
   function hapusKartu(id) {
       var kartu = document.getElementById(id);
       kartu.style.transition = "all 0.5s ease";
       kartu.style.opacity = "0";
       kartu.style.transform = "scale(0.8)";
       setTimeout(function() {
           kartu.remove();
       }, 500);
   }
   function resetKartu() {
       var container = document.querySelector(".card-container");
       container.innerHTML = `
           <div class="card" id="card1">
               <h3>HTML</h3>
               <p>Bahasa dasar buat bikin website.</p>
               <button onclick="hapusKartu('card1')">Hapus</button>
           </div>
           <div class="card" id="card2">
               <h3>CSS</h3>
               <p>Bikin website jadi cakep dan rapi.</p>
               <button onclick="hapusKartu('card2')">Hapus</button>
           </div>
           <div class="card" id="card3">
               <h3>JavaScript</h3>
               <p>Bikin website jadi interaktif.</p>
               <button onclick="hapusKartu('card3')">Hapus</button>
           </div>
       `;
   }
   // Fungsi simpan nama ke Local Storage
   function simpanNama() {
       var nama = document.getElementById("inputNama").value;
       if (nama == "") {
           alert("Nama gak boleh kosong bro!");
           return;
       }
       localStorage.setItem("userName", nama);
       tampilkanNama();
   }

   // Fungsi tampilkan nama dari Local Storage
   function tampilkanNama() {
       var nama = localStorage.getItem("userName");
       if (nama) {
           document.getElementById("namaUser").innerText = nama + "!";
       }
   }

   // Panggil saat halaman dibuka
   tampilkanNama();
   function hapusNama() {
       localStorage.removeItem("userName");
       document.getElementById("namaUser").innerText = "Teman!";
       document.getElementById("inputNama").value = "";
       alert("Nama udah dihapus bro!");
   }