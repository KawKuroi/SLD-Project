import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png';

export default function Navigation() {
    return (
        <header className ="header">    
            <div className="logo">
                <img src = {logo} width="50" />
            </div>
            <nav> 
                <ul className="nav-links">
                    <li><Link to="/inicio">Inicio</Link></li>
                    <li><Link to="/herramientas">Herramientas</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                </ul>
            </nav>
            <Link className ="btn" to="/traductor"><button> Traductor SLD</button></Link>
        </header>
    )
}