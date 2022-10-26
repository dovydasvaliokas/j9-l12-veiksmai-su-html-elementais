window.onload = function() {
    let pliusoMygtukas = document.getElementById("pliusoMygtukas");
    let skaiciavimoMygtukas = document.getElementById("skaiciavimoMygtukas");
    let minusoMygtukas = document.getElementById("minusoMygtukas");

    pliusoMygtukas.onclick = function() {
        let ivedimoLaukelis = document.createElement("input");

        ivedimoLaukelis.type = "number";
        ivedimoLaukelis.classList.add("skaiciai");

        pliusoMygtukas.before(ivedimoLaukelis);
    }

    minusoMygtukas.onclick = function() {
        pasalintiPaskutini("skaiciai");
    }

    skaiciavimoMygtukas.onclick = function() {
        const skaiciai = masyvoNuskaitymasIsLaukeliu("skaiciai").map(Number);
        let pastraipa = document.getElementById("rezultatoPastraipa");

        pastraipa.innerHTML = `Visų skaičių suma yra: ${masyvoSuma(skaiciai)}`;
    }
}


function pasalintiPaskutini(klasesPavadinimas) {
    let laukeliai = document.getElementsByClassName(klasesPavadinimas);
    laukeliai[laukeliai.length - 1].remove();
}


function masyvoNuskaitymasIsLaukeliu(klasesPavadinimas) {
    const laukeliai = document.getElementsByClassName(klasesPavadinimas);
    const masyvas = [];
    for (let i = 0; i < laukeliai.length; i++) {
        masyvas.push(laukeliai[i].value);
    }
    return masyvas;
}

function masyvoSuma(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
    }
    return suma;
}