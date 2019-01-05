function addHoroscope() {

    fetch("/addHoroscope.php", {
            method: 'POST',
            credentials: 'include'
        })
        .then((response) => response.json())
        .then((json) => {
            //todo: implement this part
        })
        .catch((err) => {
            console.log(err);
        });
        
}