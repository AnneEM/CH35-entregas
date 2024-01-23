import './Astros.css'
import { useEffect, useState } from 'react';
import Astro from './Astro';

//Llamar a la API, utilizando Hooks (userState y userEfect)
//Componente para agregar la información de la API astros dentro de las cards
const Astros = () => {

    //Definir la URL de la API
    const ASTROS_URL = 'http://api.open-notify.org/astros.json';

    //Implementando useState
    const [astros, setAstros] = useState([]);

    //Implementando useEfect
    useEffect(() => {
        fetchAstros(); //Hoisting de una funcion que voy a definir
    }, []); 

    //Crear función  Fetch para conecyatse a la APP
    const fetchAstros = () => {
        fetch(ASTROS_URL)
            .then(response => response.json())
            .then(data => setAstros(data.people)) //Para que la información viva dentro del componente actualizado, traigo setAstros y le paso los datos de `people` de la API
            .catch(error => console.error(error))
    }
    console.log(astros);//Vive en consola
//Enviar la info de la API a las cards utilizando .ap sobre el array "Astros"
    return (
        <>
        {
            //'astro' funciona con los elementos que se recorren en el array 'astrps' y.map recibe dichos elementos, más un indez y una función de tipo callback
            astros.map((astro, index) => (
                <Astro key={index} {...astro} />
            ))
        }
        </>
    )
}
export default Astros