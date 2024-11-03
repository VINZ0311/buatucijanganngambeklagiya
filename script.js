function changeText() {
    const response = document.getElementById('response');
    response.textContent = "Aku sayang banget sama kamu ❤️";
    response.style.color = '#d9534f';

    // Ubah warna tombol dan nonaktifkan
    const button = document.querySelector('button');
    button.textContent = "Dimaafkan!";
    button.style.backgroundColor = "#5cb85c";
    button.disabled = true;
}
