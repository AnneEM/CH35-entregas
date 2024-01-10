//MANIPULACION DEL DOM
/*
*Leer y traer nodos del árbol del DOM.
    ----> document.getElementById (Trae elementos por ID)
    ----> document.getElementsByClassName (Trae elementos por class)
    ----> document.getElements.ByTagName (Trae elementos por etiquetas)
*/

// .getElementById
/* Siempre se le va a asignar una variable */
const titulo = document.getElementById("title1");
console.log (titulo);
console.log (titulo.innerText); //Traer un string (Texto que vive en mi id)

//.getElementsByClassName
const titulos = document.getElementsByClassName ("title");
console.log(titulos);
console.log(titulos.length); //Devuelve el número de longitud de elementos de la clase. 
console.log(typeof titulos); //Muestra que es un object porque es una coleccion de arrays.

//.getElements.ByTagName
const tituloH3 = document.getElementsByTagName ("h3");
console.log(tituloH3);
console.log(tituloH3 [0] .innerText);

/* Metodos para llamar elementos mediante selectores de CSS se usa para procesos más específicos y la sintaxis querySelector
------>document.querySelector("Selector"); //#, <>
------>document.querySeectorAll(). Que selecciona los elementos que se especifiquen.

*Siempre van a traer el primer elemento con el selector indicado

*/

//QUERYSELECTOR
const query = document.querySelector ("#title4");
console.log(query.innerText);

const queryClass = document.querySelector (".title");
console.log(queryClass); //Solo nos va a devilver el primer elemento de esa clase 

//QUERYSELECTOR ALL
const queryClassAll = document.querySelectorAll (".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS
titulo.style.textAlign ="center";
titulo.style.color = "#971B2F";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de Manipulación del DOM";
titulo2.style.color = "#FFB81C"; 

/*  CREAR Y AGREGAR EN EL DOM

Metodos para crear y agregar elementos en el DOM. Este proceso se divide en: 
-----> Crear nodos
*A partir de etiquetas
document.createElement("element"): Crean elementos a partir de etiquetas.
*Dentro de las etiquetas
document.createTextNode ("text"): Crea texto dentro de las etiquetas.
-----> Agregar nodos
*appendChild con un elemento padre que será la etiqueta html donde vivirá mi nodo.
Para agregar nodos, mandamos a llamar al elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado. 

parentElement.appendChild(const);
parentElement.append(const);
parentElement.insertBefore(const);
parentElement.insertAdjecentElement(const);

Usamos mayormente el appendChild
*/

/*Creando nodos*/
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/*Agregando nodos*/

// Obtengo elemento padre por tag, class o id
const parentElement = document.getElementById("dif");

//Crear texto que vivirá en el nodo 1
const textoNodo1 = document.createTextNode ("Imagen agregada desde el DOM");

//Inserto el texto en el nodo 1
nodo1.appendChild(textoNodo1);

// Insertar nodo1 en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla',sans-serif";
parentElement.style.color = "#FF5FA2";

/*Agregando imagen*/
//Inserto el imgNodo en el elemento padre para definirlo posteriormente
parentElement.appendChild(imgNodo);

//Accedo a las propiedades de la imagen
imgNodo.src = "../src//assets/Octocat.jpg";
imgNodo.alt = "Octocat-gitHub";
imgNodo.width = "360";


/*Otra forma de leer y modificar nodos*/
/*
document.outerHTML (leer)
node.innerHTML (Escribir sobre el nodo)
*/ 

const elementoOuter = titulo2.outerHTML;
console.log(elementoOuter);
titulo2.innerHTML = "Manipulacion del DOM CH35";