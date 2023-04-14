// querySelector
let puntosJugador = 0;
let puntosEnemigo = 0;

let instrucciones = document.querySelector("#instrucciones");
let marcadorPuntosJugador = document.querySelector("#puntos-jugador");
let marcadorPuntosEnemigo = document.querySelector("#puntos-enemigo");
let mensaje = document.querySelector("#mensaje");
let ganaPunto = document.querySelector("#gana-punto");
let eligeTuAtaque = document.querySelector("#elige-tu-ataque");

let mensajeEleccionJugador = document.querySelector("#eleccion-jugador");
let mensajeEleccionEnemigo = document.querySelector("#eleccion-enemigo");

let empezarDeNuevo = document.querySelector('#reiniciar');
let verMas = document.querySelector('#verMas');

// Libreria SweetAlert2 para darle la bienvenida al jugador 

Swal.fire({
    title: 'Bienvenid@ al juego:',
    text: 'Piedra, Papel o Tijera es uno de los juegos mas tradicionales en todo el mundo, espero te guste!',
    imageUrl: 'https://image.freepik.com/foto-gratis/ninos-jugando-papel-tijeras-piedra_23-2148210540.jpg',
    imageWidth: 400,
    imageHeight: 250,
    imageAlt: 'Imagen del juego piedra, papel o tijera',
    confirmButtonText : 'Jugar',
    width: '30%',
    background: "beige",
    grow: 'fullscreen',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false, 
    confirmButtonColor: 'brown',
    showCancelButton: 'true',

    customClass: {
        popup: 'ventanaPopup',
        header: '',
        title: 'ventanaTitulo',
        closeButton: '',
        icon: '',
        image: 'VentanaImg',
        content: 'VentanaContenido',
        input: '',
        actions: '',
        confirmButton: '',
        cancelButoon: '',
        footer: ''
    },
});

let ataquesJugador = document.querySelectorAll(".ataque");
ataquesJugador.forEach(boton => {
    boton.addEventListener("click", iniciarJuego);
});

function iniciarJuego(evento) {

    let eleccionEnemigo = Math.floor(Math.random() * 3);
    let eleccionJugador = evento.currentTarget.id;

    // piedra = 0
    // papel = 1
    // tijera = 2

    if (eleccionEnemigo === 0) {
        eleccionEnemigo = "piedra";
    } else if (eleccionEnemigo === 1) {
        eleccionEnemigo = "papel"
    } else if (eleccionEnemigo === 2) {
        eleccionEnemigo = "tijera"
    }

    // piedra contra tijera
    // tijera contra papel
    // papel contra piedra
    // iguales es empate

    if (
        (eleccionJugador === "piedra" && eleccionEnemigo === "tijera") ||
        (eleccionJugador === "tijera" && eleccionEnemigo === "papel") ||
        (eleccionJugador === "papel" && eleccionEnemigo === "piedra")
    ) {
        ganaUsuario();
    } else if (
        (eleccionEnemigo === "piedra" && eleccionJugador === "tijera") ||
        (eleccionEnemigo === "tijera" && eleccionJugador === "papel") ||
        (eleccionEnemigo === "papel" && eleccionJugador === "piedra")
    ) {
        ganaPC();
    } else {
        empate();
    }


    mensaje.classList.remove("disabled");
    mensajeEleccionJugador.innerText = eleccionJugador;
    mensajeEleccionEnemigo.innerText = eleccionEnemigo;

    if (puntosJugador === 3 || puntosEnemigo === 3) {

        if (puntosJugador === 3) {
            instrucciones.innerText = "¡Ganaste el juego!"
        }

        if (puntosEnemigo === 3) {
            instrucciones.innerText = "¡El enemigo ganó el juego!"
        }

        eligeTuAtaque.classList.add("disabled");
        empezarDeNuevo.classList.remove("disabled");
        verMas.classList.remove("disabled");
        empezarDeNuevo.addEventListener("click", reiniciarJuego);
    }
}

function ganaUsuario() {
    puntosJugador++;
    marcadorPuntosJugador.innerText = puntosJugador;
    ganaPunto.innerText = "¡Ganaste un punto!"
}

function ganaPC() {
    puntosEnemigo++;
    marcadorPuntosEnemigo.innerText = puntosEnemigo;
    ganaPunto.innerText = "¡El enemigo ganó un punto!"
}

function empate() {
    ganaPunto.innerText = "¡Empate!"
}

function reiniciarJuego() {
    empezarDeNuevo.classList.add("disabled");
    eligeTuAtaque.classList.remove("disabled");
    mensaje.classList.add("disabled");
    verMas.classList.add("disabled");

    puntosJugador = 0;
    puntosEnemigo = 0;

    marcadorPuntosJugador.innerText = puntosJugador;
    marcadorPuntosEnemigo.innerText = puntosEnemigo;

    instrucciones.innerText = "El primero en llegar a 3 puntos gana"
}



