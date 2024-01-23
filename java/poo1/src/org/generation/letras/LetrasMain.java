package org.generation.letras;

public class LetrasMain {
	public static void main(String[]args) {
		//Instanciar objetos (Letras y contador)
		Letras letras = new Letras ();
		letras.mostratMensaje("Escribe un texto");
		String palabra = letras.leerEntrada(); //Guardamos el texto intruducido por el usuario en una variable
		
	//Invocar los metodos de conteo	
		Contador contador = new Contador();
		
		int totalVocales  = contador.contarVocales(palabra);
		System.out.println("Hay " + totalVocales + " vocales");
		
		int totalNumeros  = contador.contarNumeros(palabra);
		System.out.println("Hay " + totalNumeros + " numeros");
		
		int totalConsonantes  = contador.contarConsonantes(palabra);
		System.out.println("Hay " + totalConsonantes + " consonantes");
		
		int totalSimbolos  = contador.contarSimbolos(palabra);
		System.out.println("Hay " + totalSimbolos + " simbolos");

		
		
		
		
		
		
	}
}
