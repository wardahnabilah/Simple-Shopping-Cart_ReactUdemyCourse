import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

export function Header() {
    const active = "bg-neutral-300 text-lg p-2 rounded"
    const notActive = "text-lg p-2 rounded"
    
    return (
        <header className="font-poppins p-3 max-w-container mx-auto flex justify-between items-center border-b">
            <Link to="/" className="flex items-center gap-2">
                <img className="w-10" src={Logo} alt="logo" />
                <span className="text-lg">Shopping Cart</span>
            </Link>
            <nav className="flex items-center tablet:hidden">
                <NavLink to="/" className={({isActive}) => isActive ?  active : notActive} end>Home</NavLink>
                <NavLink to="/cart" className={({isActive}) => isActive ?  active : notActive}>Cart</NavLink>
            </nav>
            <Link to="/cart" className="text-lg font-semibold pr-2">Cart: 2</Link>
        </header>
    )
}