package controlDeFlujo;
import java.util.Scanner;
public class FlujoControl {

	public static void main(String[] args) {
		// Debe coincidir la clase con el nombre del documento / proyecto

		//Primero defino una variable de tipo string donde se almacenará el dato
		String viaje = null; //Se queda en null y después agrego. Variable declarada e inicializada, en null a propósito, para tener un espacio de memoria ya asignado y solo completarlo con un nuevo dato. 
		
		//Para validar si podemos viajar en cierta fecha
		/* if (viaje != null) {
			System.out.println("No se cuenta con fechas disponibles, ¡Lo sentimos!");
		} else {
			System.out.println("Puede reservar fechas");
		} */
		
		
		//Validación de contraseñas
		/*		Scanner scanner2 = new Scanner (System.in);
				
				//Solicitar la contraseña 
				System.out.print("Ingrese la contraseña: ");
				String passw1 = scanner2.nextLine();
				
				//Verificando contraseña
				System.out.print("Ingrese nuevamente la contraseña: ");
				String passw2 = scanner2.nextLine();
				
				//Verificar si las contraseñas son iguales
				if (passw1.equals(passw2)) {
					System.out.println("Las contraseñas coinciden");
				} else {
					System.out.println("Contraseñas no coinciden");
				}
		
	//cierras el scanner
		scanner2.close(); */
		
		
		//PRACTICA 2
		//HACER UN MENU INTERACTIVO CON SCANNER
		
		Scanner scanner = new Scanner(System.in);

        System.out.println("Bienvenido a la dulceria, ¿qué desea ordenar?");
        System.out.println("1. Palomitas");
        System.out.println("2. Refresco");
        System.out.println("3. Nachos");
        System.out.println("4. Hot-dog");
        System.out.println("5. Pagar");

        int menu = scanner.nextInt();

        switch (menu) {
            case 1:
                System.out.println("Usted ha agregado Palomitas a su combo");
                // Aquí se agregó una opción y mensaje.
                break;
            case 2:
                System.out.println("Usted ha agregado Refresco a su combo");
                break;
            case 3:
                System.out.println("Usted ha agregado Nachos a su combo");
                break;
            case 4:
                System.out.println("Usted ha agregado Hot-dog a su combo");
                break;
            case 5:
                System.out.println("Usted ha seleccionado pagar su combo");
                break;
            default:
                System.out.println("Por el momento no contamos con esa opción en nuestro menú, lo invitamos a seleccionar una opción válida");
                break;
        }

        // CIERRA EL Scanner
        scanner.close();
	}//main

}//clase
