// ini JavaScript

window.onload = function() {
    document.querySelector('input[type="button"]').addEventListener("click", validasi);
};

function validasi(){
    var nama = document.getElementById('nama').value;
    var tgl = document.getElementById('tgl').value;
    var jk = document.querySelector('input[name="jk"]:checked');
    var pesan = document.getElementById('pesan').value;
    var result = document.getElementById('result');
    
    const sekarang = new Date();   
    const tanggalWaktuString = sekarang.toLocaleString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    });

    console.log("Nama:", nama);
    console.log("Tanggal Lahir:", tgl);
    console.log("Jenis Kelamin:", jk);
    console.log("Pesan:", pesan);
    console.log("Sekarang:", tanggalWaktuString);

    if (nama === "") {
        alert("Nama harus diisi");
        return false;
    }
    
    if (tgl === "") {
        alert("Tanggal lahir harus diisi");
        return false;
    }
    
    if (!jk) {
        alert("Jenis kelamin harus dipilih");
        return false;
    }

    if (pesan === "") {
        alert("Pesan harus diisi");
        return false;
    }

 
    result.innerHTML = `
        <p><b>Current time</b> : ${tanggalWaktuString}</p> <br>
        <p><b>Nama</b> : ${nama}</p>
        <p><b>Tanggal Lahir</b> : ${tgl}</p>
        <p><b>Jenis Kelamin</b> : ${jk.value}</p>
        <p><b>Pesan</b> : ${pesan}</p>
    `;

    user.innerHTML = nama;
}

