import CartWidget from './CartWidget';

const NavBar = () =>{
  return(
    <header>
        <h1 className="navTitle">Cinnamon</h1>
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

