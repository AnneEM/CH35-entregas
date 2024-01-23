package org.generation.letras;
//CONTADOR: Métodos para contar vocales, consonantes, numeros y simbolos
/*Necesitamos establecer dos grupos de métodos:
 *    Grupo 1: Métodos booleanos para determinar si corresponde  o no.
 *    Grupo 2: Métodos que van a devolver el conteo de dichos caracteres
 */

public class Contador {
	//Grupo 1
	public boolean esVocal(char caracter) {
		return (caracter == 'a' || caracter == 'e'|| caracter == 'i'|| caracter == 'o'|| caracter == 'u' || caracter == 'A' || caracter == 'E'|| caracter == 'I'|| caracter == 'O'|| caracter == 'U');
	}
	
	public boolean esNumero(char caracter) {
		//Castear por numero ASCCI (48-57)
		short codigoAsccii =(short)caracter;
		return codigoAsccii >= 48 && codigoAsccii <=57;
	}
	
	public boolean esConsonante(char caracter) {
		//Casting para utilizar tabla ASCCI (65-90) O (97- 122)
		short codigoAscii = (short)caracter;
		return (codigoAscii >= 65 && codigoAscii <= 90) || ((codigoAscii >= 97 && codigoAscii <= 122) && !esVocal(caracter));				
	}
	
	public boolean esSimbolo(char caracter) {
		return !(esVocal(caracter) || esNumero(caracter)|| esConsonante(caracter));
	}
	
	//Grupo 2
	//Metodo para contar vocales
	public int contarVocales(String palabra) {
		int vocales = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esVocal (caracter)) {
				vocales++;
			}
		}
		return vocales;
	}
	
	//Metodo para contar numeros
	public int contarNumeros(String palabra) {
		int numeros = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esNumero (caracter)) {
				numeros++;
			}
		}
		return numeros;
	}
	
	//Metodo para contar consonantes
	public int contarConsonantes(String palabra) {
		int consonantes = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esConsonante (caracter)) {
				consonantes++;
			}
		}
		return consonantes;
	}
	
	//Metodo para contar simbolos
	public int contarSimbolos(String palabra) {
		int simbolos = 0;
		for (char caracter : palabra.toCharArray() ) {
			if(esSimbolo (caracter)) {
				simbolos++;
			}
		}
		return simbolos;
	}
	
	
	
	
	
	
	
	
}
