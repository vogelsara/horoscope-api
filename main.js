
function viewHoroscope() {

    var birthday = document.getElementById('birthdayInput').value;

    fetch("/viewHoroscope.php?birthday="+birthday, {
            method: 'GET',
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((json) => {
            var horoscopeText = document.getElementById('horoscope-output');
            horoscopeText.innerText = json;
        });
}

function addHoroscope() {
    var formData = new FormData();
    formData.append('birthday', document.getElementById('birthdayInput').value);
    formData.append('horoscope-input', document.getElementById('horoscope-input').value);

    fetch("/addHoroscope.php", {
            method: 'POST',
            credentials: 'include',
            body: formData
        }).then(updateButtons());
}

function updateHoroscope() {

    var birthday = document.getElementById('birthdayInput').value;
    var horoscopeText = document.getElementById('horoscope-input').value;

    var queryString = "birthday="+birthday+"&horoscope-input="+horoscopeText;

    fetch("/updateHoroscope.php", {
            method: 'PUT',
            credentials: 'include',
            body: queryString
        }).then(updateButtons());
        
}

function deleteHoroscope() {
    
    var birthday = document.getElementById('birthdayInput').value;

    var queryString = "birthday="+birthday;

    fetch("/deleteHoroscope.php", {
            method: 'DELETE',
            credentials: 'include',
            body: queryString
        }).then((response) => response.json())
        .then((json) => {
            if (json) {
                updateButtons();
            }
        });
        
}

function updateButtons() {
    var birthday = document.getElementById('birthdayInput').value;

    fetch("/viewHoroscope.php?birthday="+birthday, {
            method: 'GET',
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((json) => {
            var addHoroscopeButton = document.getElementById('addHoroscopeButton');
            var updateHoroscopeButton = document.getElementById('updateHoroscopeButton');
            var deleteHoroscopeButton = document.getElementById('deleteHoroscopeButton');
            if (json == "") {
                addHoroscopeButton.disabled = false;
                updateHoroscopeButton.disabled = true;
                deleteHoroscopeButton.disabled = true;
            } else {
                addHoroscopeButton.disabled = true;
                updateHoroscopeButton.disabled = false;
                deleteHoroscopeButton.disabled = false;
            }
            viewHoroscope();
        });
}