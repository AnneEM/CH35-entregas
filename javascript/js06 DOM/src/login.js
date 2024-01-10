const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit")

//REGEX: Expresiones regulares. Determinan patrones que se deben cumplir. 
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Deshabilitar el boton
submitButton.disabled = true;

//Evento para un Input, el cual evaluará el patron de expresion regular y en caso de cumplir con el patron, habilitrá el boton y podremos ser refirigidos a una pagina. 

/*---->Se obtiene el valor actual del campo email (input) usando e.target.
------>Se obtiene el valor actual del campo email (input) usando e.target
------>Se evalúa la REGEX
*/
emailInput.addEventListener("input",(e)=>{
    const text = e.target.value;
    
    if (emailREGEX.test(text) == true){
        submitButton.disabled = false;
    }
})