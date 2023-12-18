/*
Algunas funciones reciben parámetros y otras no*/


//FUNCION DE SALUDO
//Funciones  x feclaracion
//Paso 1: Declarar la funcion
function saludar () {
    console.log ("hola desde una función");
}
//Paso 2: Ejecutar la función/Invocarla
saludar ();

//hoisting. Caracteristica de una funcion que nos permite invocar desde antes de su inicialización, es decir, se puede invocar antes del bloque de código o después.
function saludar (){
    console.log("Hola invocando la funcion con hoisting");
}
saludar();
//Funcones que retornan algo: Para que una función retorne algo (un string, una operacion, una variable, etc.) Nesecitamos indicar que vamos a retornar mediante la palabra return. 

function greeting(){
    return "Hola desde una funcion que retorna";
}
console.log (greeting ());

//Funcion que retorna y recibe parámetros:
function sumar(x, y){
    return x + y;
}
let resultado = sumar (200, 30);
console.log(`El resultado de la suma de x + y es ${resultado}`);

//Calcular el cuadrado
function calCuadrado (numero) {
    return numero * numero;
}
let resultCuadrado =calCuadrado (5);
console.log(resultCuadrado);

//Funciones flecha (Arrow) Es una manera de declarar una función por declaracion, sintetizando código y haciéndolo más legible.
//f¿Funcion para calcular el cubo de un cuadrado
const calCubo = (number) => {
    return number * number *number;
}
let resulCubo = calCubo(3);
console.log(resulCubo);

//funciones anónimas: Son un tipo de funcion que se declara sin nombre de funcion y se alojan en el interior de una variable. Se hace referencia a ellas cada vez que la utilicemos.
//Las funciones anónimas no permiten el hoisting. No se pueden invocar antes de inicializarlas.
const mensaje = function () {
    return "Este es un msj desde una función anónima";
}
console.log(mensaje());

//Callbacks; Es pasar una funcion B por parámetro a una función A, de modo que la funcion A pueda ejecutar esa funcion B de forma genérica desde su código.
//Funcion B
const functionB = function () {
    console.log("Ejecutando funcion B");
}
//Funcion A, que manda a llamar a la funcion B
const functionA = function (callback){
    callback ();
}
functionA(functionB);
//async - away investigar 