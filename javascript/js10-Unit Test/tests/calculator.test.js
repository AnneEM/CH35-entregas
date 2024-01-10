//Guardar en una constante nuestra importacion
const calculator = require('../modules/calculator.js');

//PRIMER TEST 
test('La suma de dos numeros y el valor resultante', () => {
    expect(calculator.sum(10, 20)).toBe(30);
});

//SEGUNDO TEST
test('La resta de dos numeros y el valor resultante', () => {
    expect(calculator.substract(10, 20)).toBe(-10);
});