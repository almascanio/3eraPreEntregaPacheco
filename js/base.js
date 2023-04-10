document.getElementById('#form-jugador').addEventListener('submit', function(evento) {

    evento.preventDefault();
    
    const nombre = document.getElementById('#nombre').value;
    
    const jugador = {
        'nombre': nombre,
    };
    
    const jugadorJSON = JSON.stringify(jugador);
    
    localStorage.setItem('jugador', jugadorJSON);
});