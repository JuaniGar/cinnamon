import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const {cart} = useContext(CartContext)

    return ( 
        <>
         {cart.length === 0 ? '' :
        <Link to="/cart">
        <p className="material-icons">shopping_cart</p>
        </Link>
         }
        </>
     );
}
 
export default CartWidget;