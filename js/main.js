const instru = document.querySelector('#intro')
const puntosJugador = document.querySelector('#puntos-jugador')
const puntosEnemigo = document.querySelector('#puntos-enemigo')
const mensaje = document.querySelector('#mensaje')
const ganaPunto = document.querySelector('#punto')
const ataque = document.querySelector('#tu-ataque')
const eleccionJugador = document.querySelector('#eleccion-jugador')
const eleccionEnemigo = document.querySelector('#eleccion-enemigo')

let puntoJug = 0; 
let puntoEne = 0;
let loQueEscogioJug; 
let loQueEscogioEne;



let opcionAtaque = document.querySelectorAll('.ataque')
opcionAtaque.forEach( opcion => {
    opcion.addEventListener("click", iniciarJuego);
});

function iniciarJuego(evento){
    let loQueEscogioEne = Math.floor(Math.random() * 3);
    let loQueEscogioJug = evento.currentTarget.id;

    // piedra = 0
    // papel = 1
    // tijera = 2 

    if (loQueEscogioEne === 0){
        loQueEscogioEne = 'Piedra'; 
    } else if (loQueEscogioEne === 1){
        loQueEscogioEne = 'Papel';
    } else if (loQueEscogioEne === 2){
        loQueEscogioEne = 'Tijera'
    }

    // piedra contra tijera 
    // papel contra piedra 
    // tijera contra papel
    // si no empate 

    if (
        (loQueEscogioJug === 'Piedra' && loQueEscogioEne === 'Tijera') ||
        (loQueEscogioJug === 'Papel' && loQueEscogioEne === 'Piedra') ||
        (loQueEscogioJug === 'Tijera' && loQueEscogioEne === 'Papel')
){
    ganadorJugado();
} else if (
        (loQueEscogioEne === 'Piedra' && loQueEscogioJug === 'Tijera') ||
        (loQueEscogioEne === 'Papel' && loQueEscogioJug === 'Piedra') ||
        (loQueEscogioEne === 'Tijera' && loQueEscogioJug === 'Papel')
) {
    ganadorEnemigo();
} else {
    empate();
}
    mensaje.classList.remove('disabled')
    eleccionJugador.innerText = loQueEscogioJug;
    eleccionEnemigo.innerText = loQueEscogioEne;

    if (puntoJug === 3 || puntoEne === 3) {

        if (puntoJug === 3) {
            instru.innerText = '¡Ganaste el juego!'
        }

        if (puntoEne === 3) {
            instru.innerText =  '¡La computadora ganó el juego!'
        }

        ataque.classList.add("disabled");
        volverAJugar.classList.remove("disabled");
        volverAJugar.addEventListener("click", volverAJugarDeNuevo);
    }

}

function ganaUsuario(){
    puntoJug++;
    puntosJugador.innerText = puntoJug;
    ganaPunto.innerText = 'Ganaste un punto';
}

function ganaEnemigo(){
    puntoEne++;
    puntosEnemigo.innerText = puntoEne;
    ganaPunto.innerText = 'Gano punto el enemigo';
}

function empate(){
    ganaPunto.innerText = 'Empate';
}

function volverAJugarDeNuevo() {
    volverAJugar.classList.add("disabled");
    ataque.classList.remove("disabled");
    mensaje.classList.add("disabled");

    let puntoJug = 0; 
    let puntoEne = 0;

    puntosJugador.innerText = puntoJug;
    puntosEnemigo.innerText = puntoEne;

    instru.innerText = "El primero en llegar a 3 puntos gana."
}

