window.onload = function() {
    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function() {
        let pastraipa = document.getElementById("pastraipa");
        let spalva = grazintiReiksmeIsLaukelio("spalva");

        pastraipa.style.backgroundColor = spalva;
    }
}

function grazintiReiksmeIsLaukelio(id) {
    let laukelis = document.getElementById(id);
    let reiksme = laukelis.value;
    return reiksme;
}