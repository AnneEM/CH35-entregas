import './Main.css'
import GenMxLogo from '../assets/generation.jpg'
const Main = () =>{
    return(
        <>
        <div className="container--main">
            <div className="main--head">
                <a href='#'>
                    <img src={GenMxLogo} className='main--logo' alt='Logo Gen Mex'/>
                </a>
            </div>
            <h1> React + Vite</h1>
            <h2> Astros API</h2>
        </div>
        </>
    )
}
export default Main;