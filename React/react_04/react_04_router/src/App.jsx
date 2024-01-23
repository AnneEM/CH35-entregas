import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Nosotros from './components/SobreNosotros'

//-Routes. Actua como contenedor padre de todas las rutas individuales que se crearán en la aplicación
/* -Route. Es la ruta 'Hija' de cada componente. Recibe dos atrbutos 
1. -Path: Especifica la ruta (URL) a seguir
2.- element: Especifica el compnente que se renderiza
*/

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Inicio /> } />
      <Route path='nosotros' element={ <Nosotros /> } />
      <Route path='contacto' element={ <Contacto /> } />
    </Routes>
    </>
  )
}

export default App


