window.onload = function() {
    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function() {
        let veiksmas = grazintiReiksmeIsLaukelio("veiksmas");
        let skaicius1 = +grazintiReiksmeIsLaukelio("sk1");
        let skaicius2 = +grazintiReiksmeIsLaukelio("sk2");
        let pastraipa = document.getElementById("rezultatoPastraipa");

        pastraipa.innerHTML = `Rezultatas yra: ${aritmetinisVeiksmas(veiksmas, skaicius1, skaicius2)}`;
    
    }

}

function grazintiReiksmeIsLaukelio(id) {
    let laukelis = document.getElementById(id);
    let reiksme = laukelis.value;
    return reiksme;
}

function aritmetinisVeiksmas(veiksmas, sk1, sk2) {
    switch (veiksmas) {
        case "sudėtis":
            return sk1 + sk2;
        case "atimtis":
            return sk1 - sk2;
        case "daugyba":
            return sk1 * sk2;
        case "dalyba":
            return sk1 / sk2;
        case "liekana":
            return sk1 % sk2;
        default:
            alert("Blogai įvedėte veiksmą");
            return 0;
    }
}
