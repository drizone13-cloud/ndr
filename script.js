function sapa() {
       var nama = document.getElementById("namaInput").value;
       document.getElementById("hasil").innerText = "Halo, " + nama + "! Salam kenal ya!";
   }
function gantiWarna() {
       var warna = ["#1a1a2e", "#16213e", "#0f3460", "#e94560", "#533483"];
       var random = Math.floor(Math.random() * warna.length);
       document.body.style.backgroundColor = warna[random];
   }