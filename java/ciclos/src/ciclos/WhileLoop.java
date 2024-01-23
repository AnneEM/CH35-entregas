package ciclos;
import java.util.Scanner;
public class WhileLoop {

	public static void main(String[] args) {
		// CICLO WHILE
		/*Este ciclo, ejecuta un bloque de código hasta que se cumpla una condicion dada
		 * 
		 * while (expresion){
		 * -bloque de código a ejecutar-
		 * (Contador-iterador)
		 * }
		 * */
		
		int cuenta = 0;
		while (cuenta < 5) {
			cuenta ++;
			System.out.println("La cuenta es de  " + cuenta);
		}
		
		//EJERCICIO
		/*Crear un programa que solicite al usuario un número. Dicho número será tomado como el número final de una cuenta. Dicha cuenta inicia en 1. Debe mostrar en consola la cuenta del 1 hasta el número proporcionado.
		1. Importar un scanner e implementarlo
		2. Un mensaje para darle contexto al usuario
		3. Almacenar el número del usuario en una variable.
		4. Guardar en variable el número que iniciar la cuenta (1)
		5. Implementar un ciclo While
		6. Mostrar por consola el resultado.		
		*/
		
		//1. El scaner, porque necesitamos solicitar algo
		Scanner sc = new Scanner(System.in);
		//2. El mensaje
		System.out.println("Escribe el final de la cuenta");
		//3.Almacenar el numero en una variable
		int nFinal = sc.nextInt();
		//4. Guardar en una variable el numero
		int nInicial = 1;
		//5.Implementar un CW
		while (nInicial <= nFinal) {
			System.out.println("La cuenta esta en " + nInicial);
			nInicial ++;
		}
		
		sc.close();
	}

}
