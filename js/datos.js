// Datos de mas juegos 

let datos = document.querySelector("#buttonDatos"); 

datos.addEventListener("click", () => {
    fetch("./juegos.json")
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((data) => {
        juegosArray(data)
    })
    .catch((error) => {
        console.log("Error vuelve a intentarlo", error)
        
    })

})

function juegosArray(posiblesJuegos){
    const contenido = document.querySelector("#datos")

    let html = ""; 

    posiblesJuegos.forEach(juegos => {
        html += `
        <div class="card">
            <h3 class="nombre">${juegos.nombre}</h3>
            <img class="img" src="${juegos.imgDelJuego}">
            <p class="edad">${juegos.edadRecomendada}</p>
            <p class="minimo">${juegos.jugadoresMinimo}</p>
            <p class="maximo">${juegos.jugadoresMaximo}</p>
            <p class="material">${juegos.materialDeJuego}</p>
        </div>
        <hr class="linea">
        `
    });

    contenido.innerHTML = html
    datos.classList.add("disabled");
}