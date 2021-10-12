import CartWidget from './CartWidget';
import icon from '../media/icon.jpg';
import {Link, NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const NavBar = () =>{
  const {cart} = useContext(CartContext)
  return(
    <header>
        <Link to="/">
          <img className="logo" src={icon} alt= "Logo Cinnamon"></img>
        </Link>
        <nav>
            <ul className="navList">
                <li className="navItem"><NavLink to="/" className="navLink">Inicio</NavLink></li>
                <li className="navItem"><NavLink to="/" className="navLink">Productos</NavLink></li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
export default NavBar

