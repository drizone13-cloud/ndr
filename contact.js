function validasiForm() {
       var nama = document.getElementById("nama").value;
       var email = document.getElementById("email").value;
       var pesan = document.getElementById("pesan").value;
       var error = document.getElementById("error");

       // Cek nama kosong
       if (nama == "") {
           error.innerText = "Nama wajib diisi bro!";
           error.style.display = "block";
           return false;
       }

       // Cek email kosong
       if (email == "") {
           error.innerText = "Email wajib diisi bro!";
           error.style.display = "block";
           return false;
       }

       // Cek email valid (harus ada @)
       if (!email.includes("@")) {
           error.innerText = "Email gak valid bro! Harus ada @";
           error.style.display = "block";
           return false;
       }

       // Cek pesan kosong
       if (pesan == "") {
           error.innerText = "Pesan wajib diisi bro!";
           error.style.display = "block";
           return false;
       }

       // Kalau semua benar
       error.style.display = "none";
       alert("Terima kasih " + nama + "! Pesan lo udah terkirim!");
       return true;
   }