// Ejercicios para esta sesion

/* Ejercicio 1
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * Debe recibir como parametro la edad
 * Consideraciones: utilizar la estructura if-else
 */
 
let edad = 24;
if (edad < 18) {
    console.log("Es menor, no puede votar");
} else {
    console.log ("Eres mayor, puedes votar");
}


/*Ejercicio 2
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * Debe recibir como parametro un numero, cual sea
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73 */ 

let num = 24;
if (num / 7 && 8 != 0 ) {
    console.log(false);
} else {
    console.log(true);
}


/** Ejercicio 3
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * Debe recibir como parametro un numero aleatorio
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * Consideracion - Utilizar la estructura if-else
 */

let num1 = 12;
if (num1 % 4 == 0 ) {
    console.log(true);
} else if (num1 % 9 == 0){
    console.log (true);
} else {
    console.log (false);
}

/** Ejercicio 4
 * Realizar un programa que reciba como parametro una categoria de peliculas

 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror

 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch */

let genero = "accion";
switch (genero){
    case "accion" :
        console.log (" Jhon Wick, Top Gun");
        break;
    case "drama" :
        console.log ("Pearl, Las dos reinas ");
        break;
    case "comedia" :
        console.log ("red, Nacho Libre");
        break;
    case "romance" :
        console.log ("Cuestión de tiempo, Orgullo y prejuicio");
        break;
    case "suspenso" : 
        console.log ("Pearl");
        break;
    case "terror" :
        console.log ("Hereditary");
        break;    
        default :
        console.log ("Sin datos");
        break;    
}
 

/** Ejercicio 5
 * Crear una interfaz de un cajero ATM
 * Debe recibirse como parametro alguna de las siguientes opciones

 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

function accionCajero(opcion) {
    if (opcion === 1) {
        console.log("Retirando dinero...");
    } else if (opcion === 2) {
        console.log("Realizando transferencia...");
    } else if (opcion === 3) {
        console.log("Depósito exitoso.");
    } else if (opcion === 4) {
        console.log("Realizando pago de servicios...");
    } else {
        console.log("Opción no válida.");
    }
}
console.log("ejercicio 5")
accionCajero(1);

/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
let cantidad = "Franco";
let pesos = 2;
switch (cantidad){
    case "dolares" && "Dolares":
        console.log (pesos * 0.058);
        break;
    case "euros" && "Euros":
        console.log (pesos * 0.054);
        break;
    case "yenes" && "Yenes":
        console.log (pesos * 8.41);
        break;
    case "libra esterlina" :
        console.log (pesos * 0.046);
        break;
    case "franco suizo" && "Franco suizo" && "Franco":
        console.log (pesos * 0.051);
        break;
        default :
        console.log ("Sin datos de divisa");
        break;    
}