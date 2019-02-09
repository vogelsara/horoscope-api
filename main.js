function updatePage() {

    var birthday = document.getElementById('birthdayInput').value;

    fetch("/viewHoroscope.php", {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {
            updateButtons(json);
            showSavedHoroscope(json);            
        });
}

function updateButtons(horoscopeTextJson) {
    var addHoroscopeButton = document.getElementById('addHoroscopeButton');
    var updateHoroscopeButton = document.getElementById('updateHoroscopeButton');
    var deleteHoroscopeButton = document.getElementById('deleteHoroscopeButton');

    if (horoscopeTextJson == "") {
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
}

function showSavedHoroscope(horoscopeTextJson) {
    var horoscopeText = document.getElementById('horoscope-output');
    horoscopeText.innerText = horoscopeTextJson;
}

function addHoroscope() {

    var formData = new FormData();

    formData.append('birthday', document.getElementById('birthdayInput').value);

    fetch("/addHoroscope.php", {
            method: 'POST',
            credentials: 'include',
            body: formData
        }).then(updatePage());
}

function updateHoroscope() {

    var birthday = document.getElementById('birthdayInput').value;
    var queryString = "birthday="+birthday;

    fetch("/updateHoroscope.php", {
            method: 'PUT',
            credentials: 'include',
            body: queryString
        }).then(updatePage());
        
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
                updatePage();
            } else {
                
                console.log("deleteHoroscope: not json");
            }
        });
        
}