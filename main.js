function addHoroscope() {

    var formData = new FormData();
    formData.append('birthday', document.getElementById('birthdayInput').value);
    formData.append('horoscope-input', document.getElementById('horoscope-input').value);

    fetch("/addHoroscope.php", {
            method: 'POST',
            credentials: 'include',
            body: formData
        });
        
}