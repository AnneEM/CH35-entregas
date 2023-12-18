console.log("Hola, CH35");

/* CONTROL DE FLUJO Y ESTRUCTURAS DE CONTROL.

Las estructuras de control son componentes fundamentales dentro de la programación. Entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar código podemos mencionar las siguientes:

--> Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 --> Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 --> Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 --> Facilitar tanto la escritura de codigo como la claridad de este
 * 
 --> Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista

*/

/*Declaración de sentencia >if, else> */
/* Palabra reservada IF para comenzar la oración, se coloca un paréntesis () donde se debe colocar una expresión lógica (true/false), se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condicion se cumple (true) despupes de la llave {} declarada para el bloque de ejecución if, colocamos la palabra reservada else, para  este ejemplo no es necesario colocar más expresiones de un () 
Simplemente colocamos otras llaves {} para indicar el bloque de código que tiene  que ser ejecutado en caso de que la condicion no se cumpla (faqlse)
*/

let n = 15;

if (n > 10) {
    console.log(true);
} else {
    console.log(false);
}

/* if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar en codigo poco legible y confuso */

//if anidados
let edad = 24;
if (edad < 18) {
    console.log("Eres menor de edad, retirate");
} else if (edad >= 18 && edad < 65){
    console.log ("Eres un adulto joven");
} else {
    console.log ("Eres un adulto mayor");
}

//Sentencia switch
/* La sentencia switch es otro tipo de estrctura de control de flujo, que, nuevamente se encuentra en diversos lenguajes de programación 
Es bastante parecida a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcacion (partición de caminos), si no que se secciona en multiples casos (caso) que, dependiendo de la expresion que cumpla con un caso específico, será la secuencia que se va a ejecutar, dentro de la declaración. 

--->Declaración:
Se empieza por colocar la palabra reservada switch, seguida de esta, colocamos () donde se debe colocar el valor que se va a indicar que sentencia/cosa a ejecutar.
Falta indicar el bloque de código que se limita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
Dentro de este bloque de código, falta colocar los casos para cada valor que se desee establecer segun sea el valor indicador dentro de el paréntesis ().
----Cada uno de estos casos se separa de la siguiente manera: 
case valor : introduccion a ejecutar si el valor empata con este caso.
----Despues para indicar que la ejecucion de las sentencias debe cortarse como se cumpla.  
----Break
----Cuando terminamos de establecer los casos que necesitamos declarar, dentro de nuestra sentencia, sebemos colocar un valor defecto, default.
-----Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colorcado no empata con ningun otro dentro de la sentencia o en ninguno de los casos.
------default mensaje no disponible 
*/

let dia = "viernes";
switch (dia){
    case "lunes" :
        console.log ("Lunes de rolitas");
        break;
    case "martes" :
        console.log ("Hoy es martes de dinámica");
        break;
    case "miercoles" :
        console.log ("toca presentar proyecto");
        break;
    case "jueves" :
        console.log ("casi viernes");
        break;
    case "viernes" : 
        console.log ("viernes de disfraces");
        break;
    case "sabado" :
        console.log ("Sabadrink");
        break;    
    case "domingo" :
        console.log ("Domingo de misa");
        break;
        default :
        console.log ("Día desconocido");
        break;    
} //Termina switch

// Operador ternario
/*Es una expresión condicional if-else más simple y legible.
Principalmente se una para simplificar condiciones de una sola expresion. 
Tambien puede anidar sentencias if-else-if, sin embargo, no es recomendado porque el codigo se puede volver confuso y poco legible.
Su declaración es la siguiente:

Palabra reservada var, let o const:
se le asigna un nombre como si se tratara de una variable, operador de asignación "=", seguido de este operador, hat que colocar una expresion lógica, esta va dentro de un paréntesis () despupes hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si se cumplio (o no) laa expresion.
Para separar el resultado true defalse debemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar.
Si se cumple la condicion, del lado derecho s coloca
*/
//EJECUCION 
let verificacion = 35 > 30 ? "Si es mayor" : "No es mayor"
console.log (verificacion);

/*
Cuando usar if-else o cuando switch?
--->If-else : cuando necesitamos tomar decisiones bajo condiciones más flexibles.
--->Switch: Cuando tengamos un conjunto fijo de valores para comparar una expresión. 
*/

