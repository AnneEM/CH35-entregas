//ARREGLOS 
/* Un array es una colección o agrupacion de elementos en una misma variable, cada uno de ellos ubicado por la posicion que ocupa el array.
Los arrays se utilizan para almacenar y organizar datos de manera eficiente. 
 */

//CREANDO UN ARRAY
//----->Array de núeros 
const numeros = [1, 2, 3, 4, 5];
console.log (numeros);

//----->Array de cadena de texto
const comida = ["tacos", "sopita", "pan", "jugo"];
console.log (comida);

//----->Array mixto
const mixto = [
    "pluma",
    8,
    true,
    {nombre:"mar"}
];
console.log (mixto);

//----->Array vacío
const lista =[];
console.log (lista);
     //**Agregar elementos al array vacío
lista[0] ="Leche";
lista[1] = "Gelatina";
lista[2] = "Papas";
console.log (lista);

//---->Otra forma de crear arrays
const frutas = new Array ("Manzana", "Pera", "Naranja", "Melón", "Sandía", "Mandarina");
     //**Esta sintaxis se puede emplear en arrays porque son objetos, es una manera de mandar a llamar a un nuevo objeto de tipo Array.
console.log(frutas);

//---->Conocer la longitud del array
console.log(frutas.length);

//---->Acceder a los elementos del array. acorde a su indice. Recordar que el índice empieza desde el numero 0 (0,1,2,3,4,5)
console.log(frutas[3]); //** Corresponde al n.3, melon considerando al 0
console.log(frutas[5]); //** Corresponde al n.5,  sandía, considerando al 0

//---->Modificar un elemento del array por el índice. 
const cremeria = ["Jamon", "Crema", "Queso", "Salchicha", "Queso ranchero", "Huevo", "Yogurt"];
console.log(cremeria);
cremeria[4] = "Queso oaxaca";
cremeria[2] = "Leche";
console.log(cremeria);

//---->Arreglo de arreglos
console.log("Arreglo de arreglos");

//Estados: Edo.Mex, Jalisco, Yucatán, Sonora, Oaxaca, CDMX.

//Platillos: Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayudas, Tacos de pastor.

const estados = ["Estado de México", "Jalisco", "Yucatán", "Sonora", "Oaxaca", "CDMX"];
const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos","Dogos","Tlayudas", "Tacos"];
const menu = [estados, platillos];
console.log (menu[0][0], menu[1][0]);

     //**En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array. Se cuenta el la posicion 0 también.
console.log(`En ${menu [0][0]} se come ${menu [1][0]}`);

//METODOS DE ARRAYS

/* 
a) Metodo de cola: Los metodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (first-in-first-out) lo que significa el primer elemento añadido es el primer elemento eliminado.*

-push
-shift
-unshift

b)Metodo de pila (Stock): Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (last- in-first-out) que significa "El ultimo elemento añadido es el primero en ser eliminado" 

//**el último elemento (L) que se agrega(I) es el primero(F) en ser eliminado(O),

-push
-pop
*/

//------>Metodo de pila

console.log ("Metodos de Arrays");
const lomitos = ["Milo","Sasha","Tama","Chato","Joaquina","Alfa", "Obamita", "Pisco","Marie"];
console.log(lomitos);

     //pop() eliminar el ultimo elemento del array
let poplomitos = lomitos.pop();
console.log(poplomitos); //**Devuelve el dato eliminado. Es decir, nos muestra en la consola cual fue el dato a eliminar 
console.log(lomitos); //Elimina el ultimo de la lista

     //Agregar un elemento con push()
let pushlomitos = lomitos.push("Petrus");
console.log(lomitos);

//------>Metodo de cola

     //Quitar un primer elemento con shift()
let shiftlomitos = lomitos.shift();
console.log(lomitos); //El primer elemento añadido es el primero en irse. 

     //Unshift para agregar al principio del array
let unshiftlomitos = lomitos.unshift("Milo","Tango"); //Se agregan al inicio de la lista. En este caso se usó "," para traer consigo a otro elemento. El elemento "Tango"
console.log(lomitos);

     //Reverse () cambia el sentido del ordenamiento del array
let Reverse = lomitos.reverse();
console.log(lomitos);

/*
??Investigar:
-sort
-forEach
-slice
-splice
*/

