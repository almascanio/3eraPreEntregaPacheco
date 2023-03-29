const instru = document.querySelector('#intro')
const puntosJugador = document.querySelector('#puntos-jugador')
const puntosEnemigo = document.querySelector('#puntos-enemigo')
const mensaje = document.querySelector('#mensaje')
const ganaPunto = document.querySelector('#punto')
const ataque = document.querySelector('#tu-ataque')
const eleccionJugador = document.querySelector('#eleccion-jugador')
const eleccionEnemigo = document.querySelector('#eleccion-enemigo')
const empezarDeCero = document.querySelector('reiniciar')

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
    let enemigo; 

    console.log(evento.currentTarget);

    // piedra = 0
    // papel = 1
    // tijera = 2 

    if (loQueEscogioEne == 0){
        enemigo = 'piedra'; 
    } else if (loQueEscogioEne == 1){
        enemigo = 'papel';
    } else if (loQueEscogioEne == 2){
        enemigo = 'tijera'
    }

    // piedra contra tijera 
    // papel contra piedra 
    // tijera contra papel
    // si no empate 

    if (
        (loQueEscogioJug == 'piedra' && enemigo == 'tijera') ||
        (loQueEscogioJug == 'papel' && enemigo == 'piedra') ||
        (loQueEscogioJug == 'tijera' && enemigo == 'papel')
){
    ganaJugador();
} else if (
        (enemigo == 'piedra' && loQueEscogioJug == 'tijera') ||
        (enemigo == 'papel' && loQueEscogioJug == 'piedra') ||
        (enemigo == 'tijera' && loQueEscogioJug == 'papel')
) {
    ganaEnemigo();
} else {
    empate();
}
    mensaje.classList.remove('disabled')
    eleccionJugador.innerText = loQueEscogioJug;
    eleccionEnemigo.innerText = enemigo;

    if (puntoJug === 3 || puntoEne === 3) {

        if (puntoJug === 3) {
            instru.innerText = '¡Ganaste el juego!'
        }

        if (puntoEne === 3) {
            instru.innerText =  '¡El enemigo gano el juego!'
        }

        ataque.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", volverAJugar);
    }

}

function ganaJugador(){
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

function volverAJugar() {
    reiniciar.classList.add("disabled");
    ataque.classList.remove("disabled");
    mensaje.classList.add("disabled");

    let puntoJug = 0; 
    let puntoEne = 0;

    puntosJugador.innerText = puntoJug;
    puntosEnemigo.innerText = puntoEne;

    instru.innerText = "El primero en llegar a 3 puntos gana."
}

