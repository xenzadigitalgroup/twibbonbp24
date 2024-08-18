function showPhoto() {
    const studentName = document.getElementById('studentName').value.trim();
    const photoDisplay = document.getElementById('photoDisplay');
    const studentPhoto = document.getElementById('studentPhoto');
    const errorMessage = document.getElementById('errorMessage');
    const downloadButton = document.getElementById('downloadButton');
    
    if (studentName) {
        const photoPath = `Image/${studentName}.jpg`;
        studentPhoto.src = photoPath;
        studentPhoto.onerror = function() {
            photoDisplay.style.display = 'none';
            errorMessage.textContent = "Foto tidak ditemukan. Pastikan username instagram sesuai dengan yang di daftarkan.";
            errorMessage.style.display = 'block';
            downloadButton.style.display = 'none';
        };
        studentPhoto.onload = function() {
            photoDisplay.style.display = 'block';
            errorMessage.style.display = 'none';
            downloadButton.href = photoPath;
            downloadButton.style.display = 'block';
        };
    } else {
        photoDisplay.style.display = 'none';
        errorMessage.textContent = "Masukkan username instagram yang telah di daftarkan.";
        errorMessage.style.display = 'block';
        downloadButton.style.display = 'none';
    }
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
    if (e.ctrlKey && (e.key === 'I' || e.key === 'U' || e.key === 'J')) {
        e.preventDefault();
    }
};

document.getElementById('studentName').addEventListener('input', function(e) {
    const value = e.target.value;
    if (value[0] !== '@') {
        e.target.value = '@' + value.replace(/@/g, ''); // memastikan @ ada di awal dan tidak ada @ lain
    }
});

// JavaScript untuk mengalihkan halaman jika dibuka di desktop
if (window.innerWidth >= 768) {
    document.body.innerHTML = "<div style='text-align:center; padding:50px; font-size:1.5em; color:red;'>Halaman ini hanya dapat diakses melalui perangkat mobile.</div>";
}