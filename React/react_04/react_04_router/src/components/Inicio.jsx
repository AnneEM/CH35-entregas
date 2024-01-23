import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <>
            <div>
                <h1>Esta es la página de inicio</h1>
                <Link to="Nosotros">
                    Presiona aquí, para ir a la página Sobre Nosotros
                </Link>
                <br/>
                <br/>
                <Link to="Contacto">
                Presiona aquí para ir a la página contacto
                </Link>
            </div>
        </>
    )
}

export default Inicio