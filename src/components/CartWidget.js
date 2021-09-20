import {Link} from 'react-router-dom';


const CartWidget = () => {
    return ( 
        <>
        <Link to="/cart">
        <p className="material-icons">shopping_cart</p>
        </Link>
        </>
     );
}
 
export default CartWidget;