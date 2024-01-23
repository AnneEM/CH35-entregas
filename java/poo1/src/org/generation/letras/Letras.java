package org.generation.letras;

import java.util.Scanner;

public class Letras {
	Scanner scanner = new Scanner(System.in);
	
	//Guardar el scanner en un método
		public String leerEntrada() {
			return scanner.nextLine();
		}
		
	// Metodo para propircionar contexto al usuario
		public void mostratMensaje(String mensaje) {
			System.out.println(mensaje);
		}
}
