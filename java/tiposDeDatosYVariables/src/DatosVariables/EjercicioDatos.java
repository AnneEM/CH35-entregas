package DatosVariables;

public class EjercicioDatos {

	public static void main(String[] args) {
		System.out.println("Hola mundo");
		
		/*Comentarios multilinea*/
		//Comentarios de una sola linea
		
		byte edad = 25; //Representa un nuero entero
		System.out.println("Edad del participante " + edad);
        
		short usuariosNuevos = 200;//Sirve para representar un numero entero 16 bits (-23768 al 32767)
		System.out.println("Usuarixs nuevos " + usuariosNuevos);
	    
		int usuariosTotales = 8752;
		System.out.println("Uxuarixs totales " + usuariosTotales);
		
		long usuariosPremium = 9512;
		System.out.println("Usuarixs premium " + usuariosPremium);
	    
		//TIPOS DE DATOS DECIMALES
		float altura = 1.61f; 
		System.out.println("Altura del usuarix " + altura); //Sirve para representar un valor numerico con numeros decimales, cuyo valor es de 23 bits, puede tener 8 caracteres despues del punto decimal y que tiene que llevar una f al final
		
		double peso = 46.4;
		System.out.println("Peso del usuarix " + peso); //Sirve para representar valores numericos con decimales, cuyo valor es de 64 bits y puede tener hasta quince caracteres despues del punto decimal
		
		String nombreUsuario = "Ania"; 
		String zonaBoleto ="50";
		String costoBoleto = "500";
		System.out.println("Usuarix " + nombreUsuario);
		System.out.println("Zona a la que pertenece el usuario " + zonaBoleto);
		
		char section = 'f';
		System.out.println("section " + section);
		
		boolean clienteFrecuente = true;
		System.out.println("Es un cliente frecuebte " + clienteFrecuente);
		
		
		//CONVERSIÓN DE TIPOS DE DATOS
		//Casteo a entero
		int pesoCambio = (int) peso;
		
		//Casteo a entero
		long pesoCambio1 = (long) peso;
		
		System.out.println("double " + peso);
		System.out.println("int " + pesoCambio);
		System.out.println("long " + pesoCambio1);
		
		int zonaCambio = Integer.parseInt(zonaBoleto);
		double costoCambio = Double.parseDouble(costoBoleto);
		System.out.println(zonaCambio);
		System.out.println(costoCambio);
		
		
		//EJERCICIO 1
		byte salas =10;
		byte asientosSala =50;
		int capacidadTotal = (salas * asientosSala);
		String precioBoleto = "75.50";
		String precioPalomitas = "89.70";
		String precioBebidas = "35.50";
		String precioEntradas = "75.50";
		
		System.out.println(salas);
		System.out.println(asientosSala);
		System.out.println(precioBoleto);
		System.out.println(precioPalomitas);
		System.out.println(precioBebidas);
		System.out.println(precioEntradas);
		System.out.println("La capacidad del cine es de " + capacidadTotal);
		
		//Conversiones
		double boletCambio = Double.parseDouble(precioBoleto);
		double palomCambio = Double.parseDouble(precioPalomitas);
		double bebidasCambio = Double.parseDouble(precioBebidas);
		
		System.out.println(boletCambio);
		System.out.println(palomCambio);
		System.out.println(bebidasCambio);
		
		//Compardores
		int personasDentro = 342;
		
		if (personasDentro > capacidadTotal) {
			System.out.println("Aforo lleno");
		}else {
			System.out.println("Quedan " + (capacidadTotal - personasDentro) + " lugares disponibles");
		};
		
		double totalEntradas = personasDentro * boletCambio;
		double totalPalomitas = personasDentro * palomCambio;
		System.out.println("Total " + totalEntradas);
		System.out.println("Total de palomitas " + totalPalomitas);
		
		
		//EJERCICIO 2
		
	}

}
