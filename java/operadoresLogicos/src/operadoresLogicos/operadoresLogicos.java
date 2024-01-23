package operadoresLogicos;

public class operadoresLogicos {

	public static void main(String[] args) {
		
		/*&& operador And  devuelve true si ambas expresiones son verdaderas 
		 || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversa */
		
		//&& and
		int anios = 5;
		boolean esInfante = true;
		boolean costoInfante = anios <= 12 && esInfante;
		System.out.println("Es peque " + costoInfante);
		
		
		
		String cliente = "cliente123";
		String credenciales = "AniaMora1234";
		
		boolean credencialCorrecta = cliente.equals("cliente123") && credenciales.equals("AniaMoral1234");
		System.out.println("las credenciales son válidad " + credencialCorrecta);
		
		// || or
		
		double costoPasaje = 380.50;
		int edad = 58;
		boolean credenInapam = false; 
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		System.out.println("Tiene descuento? " + costoPasaje);
		
		//! not
		boolean asientosDisponibles = true;
		boolean libres = true;
		boolean asientosConDescuento = !libres; 
		
		System.out.println("Tenemos asientos con descuento " + asientosConDescuento);
		
		 
		
		//EJERCICIO
		/*Autobús a oaxaca
costo boleo 350
boleto*
62 asientos
4 destinados a adultxs mayores
6 a estudiantes
descuento a inapam es de 35%
a estudiantes 30%
		 * */
		
		int asientos = 62;
		 int costoBoleto = 350;
		 float descuentosEst = 0.3f;
		 float descuentoInapam = 0.35f;
		 int cantEstudiantes = 6;
		 int cantInapam = 4;
		 
		 int personasNormales = asientos - cantInapam -cantEstudiantes;
		 System.out.println("Boletos normales: " + personasNormales);
		 System.out.println("Boletos con descuentos: " + (cantInapam + cantEstudiantes));
		 
		 int gananciasNormales = personasNormales * costoBoleto;
		 System.out.println("Ganancias de boletos sin descuento:" + gananciasNormales);
		 
		 double gananciasBolDesc = costoBoleto * ((descuentosEst * cantEstudiantes) + (descuentoInapam * cantInapam) );
		 System.out.println("Ganancias de boletos con descuento: " + gananciasBolDesc);
		
	}

}
