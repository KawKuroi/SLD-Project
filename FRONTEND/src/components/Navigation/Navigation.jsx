import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <Link to='/home'><h1>Home</h1></Link>
            <Link to='/aboutUs'><h1>AboutUs</h1></Link>
            <Link to='/contact'><h1>Contact</h1></Link>
            <Link to='/tasks'><h1>Tasks</h1></Link>

        </nav>
    )
}