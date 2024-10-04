document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#tambahBarangForm");
    const tableBody = document.querySelector("#tabelBarang tbody");
    let barangCount = 0;

    // Ketika form disubmit
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah reload halaman
        
        // Ambil nilai input
        const namaBarang = document.querySelector("#nama_barang").value;
        const hargaBarang = document.querySelector("#harga_barang").value;

        if (namaBarang !== "" && hargaBarang !== "") {
            // Tambah barang ke tabel
            barangCount++;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${barangCount}</td>
                <td>${namaBarang}</td>
                <td>Rp ${parseInt(hargaBarang).toLocaleString()}</td>
                <td><button class="delete-button">❌</button></td>
            `;
            tableBody.appendChild(row);

            // Animasi dan efek warna
            row.style.transition = "background-color 0.5s";
            row.style.backgroundColor = "#a2e2ff"; // Warna biru muda
            setTimeout(() => {
                row.style.backgroundColor = ""; // Reset warna setelah 1 detik
            }, 500);

            // Menambahkan efek suara (pastikan ada file suara di lokasi yang sesuai)
            const audio = new Audio('assets/sounds/add.mp3'); // Ganti dengan file suara yang ada
            audio.play();

            // Tambahkan event listener untuk tombol hapus
            const deleteButton = row.querySelector('.delete-button');
            deleteButton.addEventListener('click', function() {
                row.style.transition = "background-color 0.5s";
                row.style.backgroundColor = "#ff7f7f"; // Warna merah muda saat dihapus
                setTimeout(() => {
                    row.remove(); // Menghapus baris setelah animasi
                }, 500);
            });

            // Reset form
            form.reset();
        } else {
            alert("Nama barang dan harga harus diisi.");
        }
    });
});
