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

/* document.write(nombre); */

/*Encasillamiento o tipeado: La clasificacion de nuestros datos. Nos será util para el mantenimiento de los códigos.
Nos ayuda a también prevenir errores y aporta facilidad de lectura a los códigos.
*/

/* let numero = 13;
let texto = "holi";

//Con encasillamiento 
let numeroEncasillado= Number = 13;
let textoEncasillado= String = "holi"; */

//typeof palabra reservada para saber que tipo de dato tenemos

/* CONVERSIÓN DE STRING A NUMBER
console.log (typeof(nombre));

let funcionNumber = console.log (typeof Number (nombre));
metodoParseInt = console.log (typeof parseInt (nombre));
metodoParseFloat = console.log (typeof parseFloat (nombre)); */

/* parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números */

//CONVERSIÓN DE NUMBER A STRING
/* console.log (typeof String (edad));
console.log (typeof edad.toString()); */

/*CONVERSION DE UN BOOLEAN A UN NUMERO*/
/* let numero = Number (esMayorEdad)
console.log (typeof (numero)); */

/*CONVERSION DE UN BOOLEAN A UN STRING*/
/* let texto = String(esMayorEdad);

console.log (typeof(texto));
console.log (typeof esMayorEdad.toString());*/

/* let negación = !esMayorEdad;
console.log (negación); */

//CONCATENAR: UNIR CADENAS DE DATOS (STRINGS)

let saludo ="hola, humanx "
let frase = "el futuro es hoy"

texto = saludo + frase;

document.write (texto); 


/* TIPOS DE DATOS
>- String
>- Number
>- Booleans
>- Null
>- Undefined
>- Objects (Objetos)
>-Objects (Arrays) 
*/

/*
console.log():Nos permite visualizar en la consola del navegador el código de JS
console.warn():Muestra un mensaje de edvertencia.
console.error(): Muestra un mensaje de error.
console.table():
*/

let firstName;
firstName = "Ania";
let lastName = "Eslava"

console.log(firstName + " " + lastName);
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);

/*ECMAScript 6 (ES6). Interpolacion de cadenas 

>- backticks ""
>- Para variables ${variable}
>-Texto para string
*/

let age = 24;
console.log('Mi nombre es ${firstName}, y mi apellido es ${lastName} y tengo ${age} años');


//console.warn();
console.warn ('Precaución, no es buena práctica dejar sin punto y coma')
//console.error();
console.error('status 404: failed')

/* Array: se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS en el cual se almacena una coleccion de elementos de manera ordenada.
los arrays se pueden manipular mediante métodos específicos.
Los elementos de un array se contabilizan como indices, empezando por indice0,  por lo cual el primer elemento del array posee un indice 0.
Un array posee n cantidad de elementos.
Se declaran como variables, seguido del sign = y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato. 
*/
let arreglo1 = []; //array vacío
console.log ('Array vacio ${arreglo1}');
//los elementos de un array se separan mediante comas
let cars = ["Volkswagen", "BMW", "Mazda", "Kia"]; //Array de string

console.log(cars);
//Longitud e indice son diferentes. Longitud es ek numero de elementos y el índice corresponde a cada elemento a partir del 0

console.log(typeof(cars));
let salariosMxn = ['15000','12000','18000', '25000','20000', '10000','18500', '10200', '20500','15300','17000', '17500'];
console.log(salariosMxn.legth); //12
console.log(salariosMxn);

/* Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es la sig: 
cons object = {
    clave1: valor1 (dato1),
    clave2: valor2 (dato2)
}
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
    firtName: "Ania",
    lastName: "Eslava",
    age: 25,
    country: "Mexico",
}

console.log(employee);
console.table(employee);
console.table(cars);