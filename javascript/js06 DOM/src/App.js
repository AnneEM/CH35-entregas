const botonRandom = document.getElementById ("btn"); 
const botonReset = document.getElementById ("reset");
const colorFondo = document.body.style.backgroundColor;

//Vamos a declarar una función que generar un numero random tomando un parametro number
const random = (number) => {
    return Math.floor(Math.random() * (number + 1));
}

//CREAR EVENTO DE CLICK PARA QUE CUANDO DE CLICK PASE ALGO
//---->boton random
botonRandom.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor
});




//---->boton de reset
botonReset.addEventListener("click", () => {
    document.body.style.background = colorFondo;
});