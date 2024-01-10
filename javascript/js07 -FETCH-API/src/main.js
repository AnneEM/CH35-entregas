//PROGRAMACIÓN SINCRONA 
/*Se ejecutan en el orden en que están escritas*/

function two() {
    console.log("dos");
}

function one() {
    console.log("uno");
    two();
    console.log("tres");
}

one();

console.log("*****************");
//PROGRAMACION ASINCRIONA 
/*
*setTimeout que recibe una función anónima y establece un tiempo (En mili segundos, donde 1000ms es 1s) de ejecución para cumplir con la condición de asincronismo
*/

const twoAsync = () => {
    setTimeout(() => {
        console.log("dos Async");
    }, 5000);
}

const oneAsync = () => {
    setTimeout(function () {
        console.log("uno Async");
    }, 2000);

    twoAsync();
    console.log("tres Async");
}

oneAsync();

// TRABAJAR CON PROMESAS MEDIANTE FETCH API

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    //Si se cumple la promesa, vamos a traer los datos de la API y se convertirá en tipo json para poder mostrarlos en consola
    .then(data => data.json())
    .then(data => {
        console.log(data); //Mostrando en consola todos los usuarios de la API
        console.log(data[0].name); //Mostrando en consola el usuario con el indice
    })
    .catch(error => console.error("ups algo salío mal", error));


//USANDO FETCH PARA MOSTRAR EN NAVEGADOR
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");

let post = null;


//--->Consumiento AP con Fetch
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/5")
        .then(response => response.json())
        .then(response => {
            post = response; // Guardo los datos de response en la variable de tipo null, para modificar el dato
            // Mandamos a llamar la variable desde la función (pero, esa no la hemos hecho, hay que hacerla)
            mostrarDatos(post);
        })
        .catch(error => console.error("!Problemas!", error));
});

// Función que me permita manipular la variable de tipo null
// Quiero traer name, username, email, phone, del user de la API
const mostrarDatos = (post) => {
    // Creando nodos (elementos) mediante DOM Manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    // Ponerlos en el HTML (innerHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    // Hacer que aparezcan en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

//----->Usando fectch para mostrar en navegador (PRODUCTOS)

const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response
            //Función por definir
            mostrarProductos(productos);
        })
        .catch(error => console.error("¡Cuidado!", error))
});

//funcion para crear, agregar y motrar elementos dedsde el DOM
const mostrarProductos = (productos) => {
    //mando a llamar title, price, description, category, image desde la API
    productos.map((productos) => { //El método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach
        const imagen = document.createElement("img");
        const titulo = document.createElement("h2");
        const precio = document.createElement("h3");
        const descripcion = document.createElement("p");
        const categoria = document.createElement("p");
        const separador = document.createElement("hr");

        //enviar a a HTML con Inner html
        imagen.src = productos.image;
        imagen.width = 200;
        titulo.innerHTML = productos.title;
        precio.innerHTML = productos.price;
        descripcion.innerHTML = productos.price;
        categoria.innerHTML = productos.category;


        tienda.appendChild(imagen);
        tienda.appendChild(titulo);
        tienda.appendChild(precio);
        tienda.appendChild(descripcion);
        tienda.appendChild(categoria);
        tienda.appendChild(separador);
    })
}

//Metodo POST utilizando fetch. Me permite crear recursos en la API
fetch("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un metodo de tipo post
    method: 'POST',
    //EL bddy de mi nuevo objeto deberá mantener la misma estructura que se emplea en la API existente. (userID, title y body)
    body: JSON.stringify({
        userId: 1986,
        title: "Sueñan los androides con ovejas eléctricas?",
        body: "Author: Phillipe K.Dick"
    }),
    //Definir el header
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(response => {
        console.log(response)
    })


//PROGRAMACIÓN ASINCRONA (PROMISE)
//Declara la función flecha de tipo async-await e indicamos que es **Una función asíncrona con la palabra reservada "Async" 
const getUser = async () => {
    //Para que se cumpla la promesa, no utilizamos then, sino que utilizamos try.
    try {
        //Retardo para que se ejecute de manera asincrona. Tengo que crar una nueva promesa que recibe un setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Mi promesa se ejecuta
        const url = "https://jsonplaceholder.typicode.com/users/4"
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error inexplicable", error);
    }
}
//Invocar la función
getUser();


//TRABAJAR CON LOCAL STORAGE
/* 
----->Local storage: Nos permite crear, eliminar, guardar objetos de JavaScript de manera local (en el equipo)
Los puedo llamar para este proyecto o para otros.
*/

//---->Crear objeto de js con sus llaves y valores
const user = [
    {
        id: 1,
        nombre: "Ania",
        apellido: "Morales",
        email: "aniaeslavam@gmail.com",
        posicion: "Alumna",
        empresa: "Generation"
    },
    {
        id: 2,
        nombre: "Juan",
        apellido: "Hernandez",
        email: "juangutierrez@gmail.com",
        posicion: "Alumna",
        empresa: "Generation"
    }

];

//Convertir el objeto creado a notación JSON y almacenarlo en el localStorage. 
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[1].nombre}, ${user[1].empresa}`);