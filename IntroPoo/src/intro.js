/* PARADIGMAS DE PROGRAMACIÓN

---->Progremación imperativa
Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada

---->Programación basada en eventos
Se basa en la gestión y respuesta de eventos

---->Programación declarativa: Explicar lo que queremos obtener. 

---->Programación orientada a objetos: Toma cierta información o estructura del mundo ral (objetos) para poder explicar ciertas cosas, como sus características (propiedades o atributos) y sus comportamientos o acciones (métodos).
*Perrito /Atributos:/ Color de pelaje, número de patas, tamaño. /Métodos:/ Correr, olfatear, saltar.

Clases: Plantillas para crear objetos, nos ayudan a definir un tipo de objeto y crear instancias. 
*/

//Class y atributos
class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //objetos
    //El constructor es una funcion especial, cuya finalidad es la de construir o instancias objetos 
    //Para inicializar un objeto es necesario definir un constructor que tomará los atributos
    //Clases= molde // Objeto: Gomita // Constructor: Chefsito // Atributos: Ingredientes // Metodos: Comportamientos


    //Constructor
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    } //No se puede trabajar sin contructor, pero si sin métodos.

    //Metodos
    comer() {
        console.log("Bon apetit");
    } //Método comer

    bailar() {
        console.log("dale hasta el suelo");
    } //Método bailar

    cantar() {
        console.log("Cantar");
    }

    noHacerNada() {
        console.log("No haga nada");
    }

    dormir() {
        console.log("A mimir");
    }

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellidos: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }


}

//Instanciar el objeto
//Declaramos variable
let usuario1 = new persona("Ania", "Eslava", "24", "aniaeslavam@gmail.com", "55555555");
let usuario2 = new persona("Juan", "Gutierrez", "26", "juan@juan.com", "6666666");
let usuario3 = new persona("Ana", "Hernandez", "24", "ana@ana.com", "88888888");
let usuario4 = new persona("Dul", "Gomez", "25", "dul@dul.com", "3333333");
let usuario5 = new persona("Emi", "Pontifes", "24", "emi@emi.com", "999999");


console.log(usuario1); //Imprimir objeto completo.
console.log(usuario4.email); //Imprimir un atributo en específico. 
console.log(usuario1, usuario2, usuario3, usuario4, usuario5);

//Invocando métodos
usuario2.comer(); //Invocando mi método.
usuario1.dormir(); //Invocando mi método.
usuario1.cantar();

//Mostrar todos los datos
usuario1.mostrarInfo();


//PILARES DE LA PROGRAMACIÓN ORIENTADA A OBJETOS
/*
----->Herencia
----->Polimorfismo
----->Encapsulamiento
----->Abstraccion
*/

//HERENCIA
/*Nos permite heredar a clases inferiores para poder optimizar el programa.

---->Subclase, que hereda atributos de la clase principal. La clase principal siempre está arriba del código, es decir, siguen jerarquía de posición.
//*Se indica de donde viene usando la palabra reservada "extends"
*/

class arrendadxr extends persona {
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar) {

        super(nombre, apellido, edad, email, telefono); //Con super se declara que va a heredar estos atributos del padre
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;
    }

    mostrarInfo() {
        console.log("Capacidad: ", this.capacidad);
        console.log("Costo: ", this.costo);
        console.log("Nombre del lugar: ", this.nombreLugar);
    }


}

let arrendadxr1 = new arrendadxr("Milo", "Carmelito", "3", "milo@milo.com", "000022000", 100, 50000, "Salon Milo");

console.log(arrendadxr1);

console.log(arrendadxr1.costo);

arrendadxr1.mostrarInfo();

//*En este caso no se especifica que viene de clase persona, porque como viene de la claqse "Arrendador", ya se sabe que "Arrendador" viene de persona. 
class arrendadxrGuadalajara extends arrendadxr {
}


//POLIMORFISMO
/* Permiten que objetos de diferentes tipos puedan ser manipulados en comun.

Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento. 
 */
class producto {
    nombre = "";
    precio = 0;

    constructor(nombre, precio) {
        this.marca = nombre;
        this.precio = precio;
    }

    mostrarDescripcion() {
        console.log("Nombre");
        console.log("Precio");
    }
}

let producto1 = new producto("Hidratante purificador", 350);

//ENCAPSULAMENTO
/*Ocultar la implementación de un objeto y solo mostrar los datos necesarios*/

class Usuario {
    #contraseña;

    constructor (userName, correo, contraseña){
    this.userName = userName;
    this.correo = correo;
    this.contraseña = contraseña;
}

verificarContraseña(contraseña){
    return this.#contraseña === contraseña;
}

}



//ABSTRACCION
/*
No es nada más que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, métodos, constructores y objetos
*/

/*  
*Objetos JSON: 
Son objetos en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles. 

Para un objeto json, la mayoria de sus datos son en string. 
*/
let objetoJson ={
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@mail.com",
    "telefono": "6666666",
}



let objetoLiteral ={
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@mail.com",
    telefono: "6666666",
}

console.log(objetoLiteral);

//PRINCIPIOS SOLID
/* ---->Principio de responsabilidad única (Single Responsability Principle SRP): Una clase de tener asignada una tarea o responsabilidad específica y esta no debería de cambiar.

   ---->Principio abierto/cerrado (opend/closed principle OCP) Una clase puede estar bierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma 

   ----->Principio de sustitucion de liksov (Liksov Sustitution LSP) Una clase hijo puede sustituir objetos de una clase padre

   ----->Principio de segregación de interfaces (Interface Segregation principle TSP)
   Delimitar los métodos que vamos a utilizar para desarrollar código.
*/

/*Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificación. 
Definir los metodos para inicializar sus atributos (constructor) imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no

Atributos:
-->Nombre
-->Calificación

metodos 
-->imprimirCalificacion
-->evaluacion

la calificación aprobatoria es de 6
if para evaluar la calificación
*/