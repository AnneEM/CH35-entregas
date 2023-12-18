//EJERCICIO DE ARRAYS TEMPERATURAS
let temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
let temperaturaF = [];
for (let i = 0; i < temperaturasCelsius.length; i++) {
    let celsius= temperaturasCelsius[i];
    var fahrenheit = (celsius* 9/5) +32;
    temperaturaF.push(fahrenheit);
    console.log(`Temperatura # ${fahrenheit}`)
}

//EJERCICIO ARRAYS BUCLES
let suma = 0;
for (let i = 1; i <=10; i++){
    suma += i;
}
console.log(suma);

//EJERCICIO NUMEROS PRIMOS
function esPrimo(num) {
    // Comprobar si el numero es 1 o menor y retornar "false"
    if (num <= 1) {
      return false;
    }
    
    // Comprobar si el número es divisible por algún número entre 2 y la raíz cuadrada del número y retornar "false"
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    // Si el número no es divisible por ningún número entre 2 y la raíz cuadrada del número, es primo
    return true;
  }

  // Ejemplo de uso
  console.log("El número 7 es primo: "+esPrimo(7)); // true
  console.log("El número 10 es primo: "+esPrimo(10)); // false

//SECUENCIA FIBONACCI 