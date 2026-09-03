let num1 = 0;
let num2 = 0;
let opcion = 0;
let nuevoNumero = false;

let pantalla = document.querySelector(".pantalla");
let botones = document.querySelectorAll(".btn");


for (let i = 0; i < botones.length; i++) {

    botones[i].onclick = function() {

        let boton = botones[i].textContent;

        if (boton == "C") {
            limpiar();
        }

        else if (boton == "⌫") {
            borrar();
        }

        else if (boton == "+") {
            num1 = Number(pantalla.textContent);
            opcion = 1;
            nuevoNumero = true;
        }

        else if (boton == "-") {
            num1 = Number(pantalla.textContent);
            opcion = 2;
            nuevoNumero = true;
        }

        else if (boton == "*") {
            num1 = Number(pantalla.textContent);
            opcion = 3;
            nuevoNumero = true;
        }

        else if (boton == "/") {
            num1 = Number(pantalla.textContent);
            opcion = 4;
            nuevoNumero = true;
        }

        else if (boton == "=") {
            operacion();
        }

        else {
            numero(boton);
        }
    }
}


function numero(n) {

    if (nuevoNumero == true) {
        pantalla.textContent = n;
        nuevoNumero = false;
    }

    else if (pantalla.textContent == "0") {
        pantalla.textContent = n;
    }

    else {
        pantalla.textContent = pantalla.textContent + n;
    }

}


function operacion() {

    num2 = Number(pantalla.textContent);

    switch(opcion) {

        case 1:
            let totalSuma = num1 + num2;
            pantalla.textContent = totalSuma;
            break;

        case 2:
            let totalResta = num1 - num2;
            pantalla.textContent = totalResta;
            break;

        case 3:
            let totalMulti = num1 * num2;
            pantalla.textContent = totalMulti;
            break;

        case 4:
            let totalDivi = num1 / num2;
            pantalla.textContent = totalDivi;
            break;

        default:
            alert("Opción no válida");
            break;
    }

    nuevoNumero = true;
}


function limpiar() {

    num1 = 0;
    num2 = 0;
    opcion = 0;
    nuevoNumero = false;

    pantalla.textContent = "0";
}


function borrar() {

    if (pantalla.textContent.length > 1) {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    }

    else {
        pantalla.textContent = "0";
    }
}
    else if (pantalla.textContent == "0") {
        pantalla.textContent = n;
    }

    else {
        pantalla.textContent = pantalla.textContent + n;
    }

}


function operacion() {

    num2 = Number(pantalla.textContent);

    switch(opcion) {

        case 1:
            let totalSuma = num1 + num2;
            pantalla.textContent = totalSuma;
            break;

        case 2:
            let totalResta = num1 - num2;
            pantalla.textContent = totalResta;
            break;

        case 3:
            let totalMulti = num1 * num2;
            pantalla.textContent = totalMulti;
            break;

        case 4:
            let totalDivi = num1 / num2;
            pantalla.textContent = totalDivi;
            break;

        default:
            alert("Opción no válida");
            break;
    }

    nuevoNumero = true;
}


function limpiar() {

    num1 = 0;
    num2 = 0;
    opcion = 0;
    nuevoNumero = false;

    pantalla.textContent = "0";
}


function borrar() {

    if (pantalla.textContent.length > 1) {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    }

    else {
        pantalla.textContent = "0";
    }
}

function operacion() {

    num2 = Number(pantalla.textContent);

    switch(opcion) {

        case 1:
            let totalSuma = num1 + num2;
            pantalla.textContent = totalSuma;
            break;

        case 2:
            let totalResta = num1 - num2;
            pantalla.textContent = totalResta;
            break;

        case 3:
            let totalMulti = num1 * num2;
            pantalla.textContent = totalMulti;
            break;

        case 4:
            let totalDivi = num1 / num2;
            pantalla.textContent = totalDivi;
            break;

        default:
            alert("Opción no válida");
            break;
    }

}


function limpiar() {

    num1 = 0;
    num2 = 0;
    opcion = 0;

    pantalla.textContent = "0";

}


function borrar() {

    if (pantalla.textContent.length > 1) {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    }
    else {
        pantalla.textContent = "0";
    }

}
