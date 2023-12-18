/* BUCLES 

Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

a) Operadores de incremento (++) y operadores de decremento (--)
b) ${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
c) Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
e) El operador ++ se utiliza para aumentar el valor de una variable en uno.
f) El operador -- se utiliza para disminuir el valor de una variable en uno.
g) (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/* CICLO FOR
Se repite hasta que la condicion se evalúe como falsa.  Crea 3 expresionales opcionales

*Sintaxis:
    for (expresióninicial; expresióncodicional; expresionactualizacion){
         Codigo a ejecutar en cada iteracion del bucle
   }

   1.Inicialización: Se debe inicializar con una variable que será evaluada en la expresion a comparar.
   2. Condicion: Es una expresion que debe cumplir la variable inicial (true), si no cumple (false) el bucle termina.
   3. Pasos a realizar: Son los intervalos que cambiaron la variable inicial mientras esta sea true.
*/

//Crear un programa para saber cuantos boletos vendemos para una rifa
for (let boleto = 1; boleto <= 25; boleto++){
    console.log (`Boleto #${boleto}`);
}

//-----> Variable afuera
let aguinaldos = 1;
for (aguinaldos; aguinaldos <= 20; aguinaldos++){ 
    console.log(`Vendi ${aguinaldos}`);
}

/* Se puede incrementar no solo de 1 en 1
* i+=n es un incremento con un numero x 
Para especificar el incremento puede hacer de la siguiente manera:                                       
for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}
*/

//------> Cuenta regresiva
let cuentaRegresiva = 15;
for (cuentaRegresiva; cuentaRegresiva >= 0; cuentaRegresiva--){
console.log(`Quedan ${cuentaRegresiva} días para año año nuevo`);
}

/*
Recorrer arrays con el ciclo for
Debemos usar indices del arreglo para poder usar el bucle, en indices desde el 0 hasta n y usaremos la propiedad length
*i Es igual a indice 
*/
const fiestaJuan = ["Frodo","Bam","Hans","Dulce","Iop","Cumpleañero","Ale"];
for(let i =0; i <fiestaJuan.length; i++){
    console.log (fiestaJuan[i]);
}

/*--------->Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/
const fruits = ["Apple", "Banana", "Orange"];
for (fruta of fruits) {
  console.log(fruta);
}

//??Corregir

//------->Sumar numeros del 1 al 20
let suma = 0;
for (let i = 1; i <=20; i++){
    suma += i;
}
console.log(suma);

//Tabla del 5 
const tabla = 5;
for (let i = 1; i<= 10; i++) {
    let resultado = tabla * i;
    console.log(`${tabla} x ${i} = ${resultado}`);
}

// CICLO WHILE
/*
Sirve para recorrer un bloque de código siemrpe que una condicion específica sea verdadera.
Sirve para realizar una tarea repetitiva muentras una condicion sea verdad.
*/

//---->Venta de algo
let productos = 5;
while (productos > 0){
    console.log(productos + " productos vendidos ");
    productos--;
}

//---->Imprirmir números
let num1 = 0;
while (num1 < 10){
    num1 ++
    console.log ("El numero es " + num1);
}

//https://dcodingames.com/el-ciclo-while/