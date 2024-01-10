//Clase y atributos
class alumno {
    nombre = "";
    calificacion = 0;

    //Constructor
    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    //Metodos
    imprimeCal() {
        console.log(`Nombre: ${this.nombre} calificación: ${this.calificacion}`);
    }
    evaluacion() {
        if (this.calificacion >= 6) {
            console.log(`${this.nombre} aprobaste crack.`);
        } else {
            console.log(`${this.nombre} reprobaste sonso.`);
        }
    }
}
//Instanciar el objeto
//Declaramos variable
let alumno1 =new alumno ("Ania", "10");
console.log(alumno1);

//Invocando métodos
alumno1.imprimeCal();
alumno1.evaluacion();

