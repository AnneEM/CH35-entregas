/* Para manipular la informacion de un usuario necesito crar un perfil mediante un objeto de JS */

const user = {
    username: 'AnneEsM',
    age: 24,
    email: 'aniaeslavam@gmail.com',
    favfilms: ['Midssomar', 'Rango', 'MeanGirls','El diablo viste a la moda']
}

//Crear una funcion que me permita ingresar el objeto del perfil en el nodo padre. 
const createUser = (user) => {
    document.getElementById("username") .textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //Mostrando elementos en forma de lista
    //Para mostrar el array en forma de lista, usar un ciclo forEach, para recorrer todo el array y traer cada elemento a la lista
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
        const li = document.createElement ("li");
        li.textContent = film;
        ul.appendChild(li);
    });
    //Modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType ="none";
    ul.style.padding = "0";
    ul.style.color = "#FAE03C";

    //Mostrando elementos de lista en forma de fila. No nos sirve porque es una lista desordenada
   /*  document.getElementById("fav-films").textContent = user.favfilms; */
}

//invocar la funcion
createUser(user);

/* Eventos para actualizar el username mediante el input y el boton*/

const inputName = document.getElementById("name");
const userName = document.getElementById("username");
const inputEmail = document.getElementById ("email-input");
const userEmail = document.getElementById("email");
const profileBtn = document.getElementById("btn-main");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
    userEmail.textContent = inputEmail.value;
});

