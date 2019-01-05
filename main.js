function addHoroscope() {
    console.log('kaka0');

    var formData = new FormData();
    formData.append('birthday', document.getElementById('birthdayInput').value);

    fetch("/addHoroscope.php", {
            method: 'POST',
            credentials: 'include',
            body: formData
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            var horoscopeText = document.createElement('p');
            horoscopeText.innerText = json;
            document.getElementById('horoscope-text').appendChild(horoscopeText);
        })
        .catch((err) => {
            console.log(err);
        });
        
}