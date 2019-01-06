function addHoroscope() {

    var formData = new FormData();
    formData.append('birthday', document.getElementById('birthdayInput').value);
    formData.append('horoscope-input', document.getElementById('horoscope-input').value);

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
            document.getElementById('horoscope-output').appendChild(horoscopeText);
        })
        .catch((err) => {
            console.log(err);
        });
        
}