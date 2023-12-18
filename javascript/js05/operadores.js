/*OPERADORES
Es un signo que especifica que debe efectuar una determinada operación*/

/*
------>Operadores aritméticos (+,-,*,/,%,++,--)
------>Operadores de asigmación (=) 
------>Operadores lógicos (&&, ||,!)
------>operadores de comparación (==,===,!=,!==,<,>,>=,<=)
------>Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)
*/

/* OPERADORES ARITMÉTICOS 

(+) Suma, se utiliza para sumar dos números
(-) Resta, se utiliza para restar un número de otro
(*) Multiplicación, se utiliza para multiplicar dos números
(/) División, se utiliza para dividir un nuero entre otro
(%) Residuo, lo que sobra de una división. Se puede aplicar para saber si un número es par o impar.
(++) Incremento
(--) Decremento
*/

let numero1 = 10;
let numero2 = 8;

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2 ;
incremento = numero1;
incremento ++;
decremento = numero2;
decremento --;


console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);


//*Ejemplo de como calcular un descuento
let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento) / 100;
let precioConDescuento = precioReal - cantidadDescuento;

console.log("Pecio real : $" + precioReal);
console.log("El porcentaje de descuento es " + porcentajeDescuento + "%");
console.log("La cantidad de descuento es $" + cantidadDescuento);
console.log("El precio final es $" + precioConDescuento);

/*OPERADORES DE ASIGNACIÓN
*/

//=: Este oparador no compara, lo que hace es asignar
let fruta = "manzana";

/*OPERADORES DE COMPARACIÓN 
*/

//---->Igualdad (==)
let numero3 = 10;
let numeroCompara= 10;

console.log(numero3 == numeroCompara); 

//---->Igualdad estricta (===)
let numero4 = 10;
let texto = "10";

console.log(numero4 === texto); //*Igualdad estricta también compara si son el mismo tipo de datos, es decir, no solo si es el mismo dato. En caso de no, arroja false. 

//----->Desigualdad o distinto. (!=)

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo){
   console.log("El precio del producto no es igual al del precio máximo" );

} else {
    console.log("El precio del producto es igual al precio máximo");
}

//------>Desigualdad estricta. (!==) Valores no son iguales, pero a diferencia de desigualdad, en este caso ambos valores deben tener el mismo tipo y valor de datos.

let cantidadComida = 500;
let cantidadServida = "500";

if (cantidadComida !== cantidadServida){
    console.log ("La cantidad de comida no coincide con la cantidad servida");
} else {
    console.log("La cantidad de comida coincide con la cantidad servida");
}

//----->Mayor menor que (>>)
let cantidad1 = 20;
let cantidadComparativa = 25;
console.log(cantidad1>cantidadComparativa);

//---->Menor que (<<)
console.log(cantidad1<cantidadComparativa);

//---->Mayor o igual que (>=)
let edad = 18;
let edadNecesaria = 18;
console.log(edad >= edadNecesaria);

//---->Menor o igual que (<=)
let temperatura = 14;
let temperaturaOptima = 20;
console.log(temperatura <= temperaturaOptima);


//**EJERCICIOS 1.0
/*Ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o hay alguno que sea mayor que otro
*/

/* let numX = 3;
let numY = 10;
if (numX > numY){
    console.log(`EL número ${numX} es mayor que el número ${numY}`);
} else {
    console.log(`EL número ${numY} es mayor que el número ${numX}`);
}

//Con prompt

console.log ("Este es un programa para comparar numeros");
let numA = prompt ("Porfavor ingresa tu primer número");
let numB = prompt ("Ingresa tu segundo número");

if (numA > numB){
    console.log(`El número ${numA} es mayor que el número ${numB}`);
} else {
    console.log (`El numero ${numA} es menor que ${numB}`);
} */


//**EJERCICION 2.0 
/*Ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no */

/*
console.log("Programa para determinar si dos palabras son iguales.");

let palabra1 = prompt("Este es un programa para determinar si dos palabras son iguales; por favor ingresa la primera palabra.");
let palabra2 = prompt("Ingresa la segunda palabra.");

if  (palabra1 !== palabra2){
    console.log("Son diferentes.")
}else{
    console.log("Son iguales.")
}  */


/* OPERADORES LÓGICOS */
// -----> (&&) AND se utilizan cuando las dos condiciones deben cumplirse. 

let mayoriaDeEdad = 18;
let tieneID = true;

if (mayoriaDeEdad >= 18 && tieneID){
    console.log("Puede rentar");
}else {
    console.log("No puede rentar");
}

// (||) OR se utiliza cuando se debe cumplir una condición u otra

let esPrime = false;
let descuento = true;

if (esPrime || descuento){
    console.log("Califica para descuento");
}else{
    console.log("No calidica para descuento");
}

//(!)NOT Se utiliza para negar 
let esDiaLibre = false;

if(!esDiaLibre){
    console.log("Se trabaja");
}else {
    console.log("DEscansito");
}

/*OPERADORES DE CADENA */

//--->toLowerCase: Cambia a minusculas el string
let mensajeUser = "HOLA BIENVENIDX A LA CONSOLA";
let cambioMinusculas = mensajeUser.toLowerCase();
console.log(cambioMinusculas);

//----->toUpperCase: hace el cambio a mayusculas
let mensajePrueba ="hola a todo el mundo";
let cambioMayusculas = mensajePrueba.toLocaleUpperCase();
console.log(cambioMayusculas);

//---->trim: Quita los espacios
let aviso = "          Cuidado    Hola     ";
let quitaEspacios = aviso.trim();
console.log(quitaEspacios);

//----->toString: Convierte un tipo de datos number en spring
let numerocon = 25;
let cadenas = numerocon.toString();
console.log(cadenas);

//------>Concat: Junta datos
let nombre ="Ania";
let apellido = "Eslava";
let nombreCompleto = nombre.concat ("",apellido);
console.log(nombreCompleto);

/*EXPRESIONES

--->Expresión aritmética
let operación = 14 + 25 * 12; //** Combina la suma con la multiplicacion


---->Expresión de cadena 
let notificacion = "casi," + "Año nuevo"; //** Expresión concatenando 

---->Expresión logica
let esMayorDeEdad = (23 > 18) && (23 < 65); //** Tienen operadores lógicos y de comparación

----->Expresión de asignación
let frasco = chocolates; //** Asigna el valor "chocolates" a frasco 
 
*/

//** EJERCICIO 3.1
/*Una función para ver si los ingredientes que tenemos son suficientes para preparar hotcacakes. Que tenga operadores lógicos y de comparación. */

function verificarIngredientes(huevos, harina, leche, azucar) {
    if (huevos >= 2 && harina >= 200 && leche >= 250 && azucar >= 50) {
        return "Tienes suficientes ingredientes para hacer hotcakes.";
    } else {
        return "No tienes la cantidad suficiente de ingredientes.";
    }
}

// Ingredientes
let cantidadHuevos = 3;
let cantidadHarina = 300;
let cantidadLeche = 300;
let cantidadAzucar = 60;

let resultado = verificarIngredientes(cantidadHuevos, cantidadHarina, cantidadLeche, cantidadAzucar);
console.log(resultado);


//** EJERCICIO 3.2
// Función que verifica los ingredientes y muestra la receta
function hacerHotcakes(tieneHarina, tieneHuevo, tieneLeche, tieneMantequilla) {
    // Verificar si tiene los ingredientes necesarios para hacer hotcakes
    if (tieneHarina && tieneHuevo && tieneLeche && tieneMantequilla) {
        // Si tiene harina y huevos, continuar con la receta
        console.log("¡Perfecto! Tienes los ingredientes necesarios para hacer hotcakes.");

        // Resto de la receta
        console.log("1. Mezcla la harina con los huevos y otros ingredientes.");
        console.log("2. Calienta una sartén a fuego medio.");
        console.log("3. Vierte la mezcla en la sartén caliente.");
        console.log("4. Cocina ambos lados hasta que estén dorados.");
        console.log("5. ¡Disfruta tus deliciosos hotcakes!");

    } else {
        // Si no tiene harina o huevos, mostrar un mensaje
        console.log("Lo siento, no tienes todos los ingredientes necesarios para hacer hotcakes. ¡Ve a comprarlos!");
    }
}

// Solicitar al usuario si tiene los ingredientes necesarios
let tieneHarina = confirm("¿Tienes harina?");
let tieneHuevo = confirm("¿Tienes huevos?");
let tieneLeche = confirm("¿Tiene leche?");
let tieneMantequilla = confirm("¿Tiene Mantequilla?");

// Llamar a la función con los valores proporcionados por el usuario
hacerHotcakes(tieneHarina, tieneHuevo, tieneLeche, tieneMantequilla); 
