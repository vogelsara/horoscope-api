function viewHoroscope() {

    var birthday = document.getElementById('birthdayInput').value;

    fetch("/viewHoroscope.php", {
            method: 'GET'
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

    fetch("/addHoroscope.php", {
            method: 'POST',
            credentials: 'include',
            body: formData
        }).then(updateButtons());
}

function updateHoroscope() {

    var birthday = document.getElementById('birthdayInput').value;
    var queryString = "birthday="+birthday;

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
            method: 'DELETE'
        }).then((response) => response.json())
        .then((json) => {
            if (json) {
                console.log("deleteHoroscope: json");
                updateButtons();
            } else {
                
                console.log("deleteHoroscope: not json");
            }
        });
        
}

function updateButtons() {

    var birthday = document.getElementById('birthdayInput').value;

    console.log("In updateButtons()");

    fetch("/viewHoroscope.php", {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {

            var addHoroscopeButton = document.getElementById('addHoroscopeButton');
            var updateHoroscopeButton = document.getElementById('updateHoroscopeButton');
            var deleteHoroscopeButton = document.getElementById('deleteHoroscopeButton');

            if (json == "") {
                console.log("ipdateButtons json");
                addHoroscopeButton.disabled = false;
                updateHoroscopeButton.disabled = true;
                deleteHoroscopeButton.disabled = true;
            } else {
                console.log("ipdateButtons not json");
                addHoroscopeButton.disabled = true;
                updateHoroscopeButton.disabled = false;
                deleteHoroscopeButton.disabled = false;
            }
            viewHoroscope();
        });
}