// Permite hacer comentarios lineales
/*Un comentario multilinea se hace con diagonal y asterisco*/

//alert ("Hola mundo");

//console.log ("Este es un mensaje para mi consola holi");

//var nombre = prompt ("Ingresa tu nombre");
//alert (" Hola " +  nombre  + " Bienvenidx a la Ch35");

/* var numero1 = parseInt (prompt ("Ingresa el primer número:"));
var numero2 = parseInt (prompt ("Ingresa el segundo número"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicacion:" + (numero1 * numero2));
console.log("division:" + (numero1 / numero2)); */

/* var edad = prompt("Ingresa tu edad:");
if (edad >= 18) {
    alert("Bienvenido a Somos Poker. ¡Disfruta de la página!");
} else {
    alert("Lo siento, debes ser mayor de 18 años para acceder a Somos Poker. Acceso denegado.");
} */

/* var edad = prompt("Ingresa tu edad:");

if (edad <= 20) {
    alert("Hola juventud");
} 
if (edad >=21) {
    alert ("Hola crisis de los 20");
}
else (edad >=40) {
    alert ("Hola crisis de los 40")
} */

/*
while (true) {
    var input = prompt("Ingresa tu edad:");

    if (!isNaN(input) && input !== "") {
        // Verifica si el input es un número y no está vacío
        edad = parseInt(input);

        if (Number.isInteger(edad)) {
            // Verifica si el número es un entero
            break;
        }
    }

    alert("Por favor, ingresa un número entero válido.");
}

if (edad >= 18) {
    alert("Bienvenido a Somos Poker. ¡Disfruta de la página!");
} else {
    alert("Lo siento, debes ser mayor de 18 años para acceder a Somos Poker. Acceso denegado.");
} */



//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
boolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

let nombre = "Daniel"; 
let invitadxsExtra = 2;
let esMayorEdad = true;
let edad = 24;
let invitadxEspecial = null;
let horaDeSalida = undefined;