import './App.css'
import Navbar from './components/Navbar'
import Main from './components/main'
import Button from './components/Button'
import Products from './components/Products'

function App() {
  const imgFashion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' alt='sneekers"
  const imgDark ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
  const imgcamel ="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"

  return (
    <>
    <Navbar/>
    <Main/>
    <Button label="Traer información"/>
    <Button label="Enviar información"/>
    <Products 
    img={imgFashion}
    name="Fashion"
    description="Tennis Fitness RunningPurple"
    price= "$1968"
    />

    <Products
    img={imgDark}
    name="Dark"
    description="Tennis Dark running"
    price="$2297"
    />

    <Products
        img={imgcamel}
        name="Beige"
        description="Casual tennis"
        price="$3400"
    />
    
    <Products
        img={imgcamel}
        name="Beige"
        description="Casual tennis"
        price="$3400"
    />

    </>
  )
}

export default App
