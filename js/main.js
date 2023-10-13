class Jugador {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`El nombre del jugador es ${this.nombre} y tiene ${this.edad} años`);
    }
}

function crearJugador() {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const edad = parseInt(prompt("Por favor, ingresa tu edad:"));
    return new Jugador(nombre, edad);
}

const jugador = crearJugador();
jugador.saludar();

const frutas = ["manzana", "banana", "naranja", "uva", "pera"];

const frutasImagenes = {
    manzana: "./img/manzana.jpg",
    banana: "./img/banana.jpg",
    naranja: "./img/naranja.jpg",
    uva: "./img/uva.jpg",
    pera: "./img/pera.jpg",    
};

function jugar(jugador) {
    alert(`Bienvenido al juego de adivinanza de frutas, ${jugador.nombre}. Debes adivinar la fruta secreta.`);
    return function () {
        let adivinado = false;

        while (!adivinado) {
            const frutaAdivinar = frutaAleatoria(frutas);
            const intento = prompt("Adivina la fruta:").toLowerCase();

            if (existeFruta(intento)) {
                if (intento === frutaAdivinar) {
                    const imagenURL = obtenerURLImagen(frutaAdivinar);
                    adivinado = true;
                    setTimeout(function () {
                        alert("¡Felicidades! Adivinaste la fruta! ");
                        console.log("¡Adivinaste! La fruta es " + frutaAdivinar);
                        console.log("URL de la imagen: " + imagenURL);
                    }, 50);
                } else {
                    alert("Esa no es la fruta correcta. Intenta nuevamente.");
                }
            } else {
                alert("Esa no es una fruta válida. Intenta nuevamente.");
            }
        }
    };
}

function existeFruta(intento) {
    return frutas.includes(intento);
}

function frutaAleatoria(frutas) {
    const indice = Math.floor(Math.random() * frutas.length);
    return frutas[indice];
}

function obtenerURLImagen(fruta) {
    return frutasImagenes[fruta];
}

function obtenerFrutaPorColor(color) {
    const frutasDelColor = frutas.filter(fruta => obtenerColor(fruta) === color);
    
    if (frutasDelColor.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * frutasDelColor.length);
        return frutasDelColor[indiceAleatorio];
    } else {
        return "No hay frutas de ese color.";
    }
}

let colorSeleccionado = "rojo";
setTimeout(function () {    
    const frutaDeColor = obtenerFrutaPorColor(colorSeleccionado);
    console.log(`Fruta de color ${colorSeleccionado}: ${frutaDeColor}`);
}, 0);    

function filtrarFrutasPorColor(color) {
    return frutas.filter(function (fruta) {
        const frutaColor = obtenerColor(fruta);
        return frutaColor === color;
    });
}

function obtenerColor(fruta) {
    switch (fruta) {
        case "manzana":
            return "rojo";
        case "banana":
            return "amarillo";
        case "naranja":
            return "naranja";
        case "uva":
            return "morado";
        case "pera":
            return "verde";           
        default:
            return "desconocido";
    }
}

const iniciarJuego = jugar(jugador);
setTimeout(function () {
    const frutaAdivinada = frutaAleatoria(frutas);
    const imagenURL = obtenerURLImagen(frutaAdivinada);       
    iniciarJuego();
}, 0);
