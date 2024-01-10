import './Products.css'

{/* const Products = (props) => {*/} 

const Products = ( {img, name, description, price} ) => {
    return (
        <>
        {/* Agregando las propiedades directamente al componente, pero no se modifican las porpiedades al importar el componente en App.jsx. Es decir, se repite la mimsa información

        <div className="cards">
            <div className="products--card">
                <img src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' alt='sneekers'/>
                <h3>Fashion</h3>
                <p>Tenis Fitness runing Purple</p>
                <h4>$1900</h4>
            </div>
        </div>
        
        */}
        {/* Props estructurados:Puedo asignar diferentes propiedades a un div sin tener que generarmuchos props,solamente usando la palabrareservada 'props' Como parametro de la función 
             Se emplea cuando yo no conozco el numero de parámetros que van a recibir.

        */}

        {/*</><div className="cards">
            <div className="products--card">
                <img src= {props.img} alt='sneekers'/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div> */}

            {/**Props desestructurado. Permite asignar datos de un objeto a una variableseparada para que dicha variable pueda contener losdatos provenientes del objeto
            No utilizamos props como parametros de la función, si no que asignamos parametros a cada elemento y los llamamos directamente en dichos elementos
            Los props desestructurados viven como parámetros, pero entre llaves y se les asigna un nombre

                    Se emplea cuando yo conozco el numero de parámetros que van a recibir.
            */}
            <div className="cards">
            <div className="products--card">
                <img src= {img} alt='sneekers'/>
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>

        </>
    )
}

export default Products;