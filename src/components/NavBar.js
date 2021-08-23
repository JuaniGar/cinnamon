import CartWidget from './CartWidget';
import icon from '../media/icon.jpg';
const NavBar = () =>{
  return(
    <header>
        <img className="logo" src={icon} alt= "Logo Cinnamon"></img>
        <nav>
            <ul className="navList">
                <li className="navItem"><a className="navLink" href="#">Inicio</a></li>
                <li className="navItem"><a className="navLink" href="#">Productos</a></li>
                <li className="navItem"><a className="navLink" href="#">Quiénes somos</a></li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
export default NavBar

